import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { fromJS } from 'immutable'
import * as Types from './types';

const exampleInitialState = fromJS({
  stories: [],
    story: {},
    categories: [],
    sideBarTopFour: [],
    sideBarRandom: [],
})

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case Types.FETCH_STORIES:
      return state.set('stories', fromJS(action.stories));
    case Types.FETCH_SINGLE_STORY:
      return state.set('story', fromJS(action.story));
    case Types.FETCH_CATEGORIES:
      return state.set('categories', fromJS(action.categories));
    case Types.FETCH_SIDEBAR_TOP_FOUR:
      return state.set('sideBarTopFour', fromJS(action.sideBarTopFour));
    case Types.FETCH_SIDEBAR_RANDOM:
      return state.set('sideBarRandom', fromJS(action.sideBarRandom));
    default: return state;
  }
}

export const makeStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const setToken = (token) => {
    sessionStorage.setItem('rivenToken', token);
}

export const getToken = () => {
    if(!token || token === ''){
        return fasle;
    }
   return sessionStorage.getItem('rivenToken');
}
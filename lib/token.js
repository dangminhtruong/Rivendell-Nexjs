export const setToken = (token) => {
    sessionStorage.setItem('rivenToken', token);
}

export const getToken = () => {
    let token = sessionStorage.getItem('rivenToken');
    if(!token || token === ''){
        return false;
    }
   return token;
}
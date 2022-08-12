export const login = (email, password) =>{
    return fetch(`${process.env.REACT_APP_AUTH_API_URL}/psychologist/login`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
        .then((res) => res.json())
}

export const register = (registerForm) => {
    return fetch(`${process.env.REACT_APP_AUTH_API_URL}/psychologist/register`, {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify(registerForm)
    })
        .then((res) => res.json())
}
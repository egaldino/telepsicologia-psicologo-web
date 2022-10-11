export const login = (email, password) =>{
    return new Promise((resolve, reject) => {
        resolve({userId: 55555555, token: "TOKEN"});
    });


    // return fetch(`${process.env.REACT_APP_AUTH_API_URL}/psychologist/login`, {
    //     method: 'POST',
    //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
    //     body: JSON.stringify({email, password})
    // })
    //     .then((res) => res.json())
}

export const register = (registerForm) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    });

    // return fetch(`${process.env.REACT_APP_AUTH_API_URL}/psychologist/register`, {
    //     method: 'POST',
    //     headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    //     body: JSON.stringify(registerForm)
    // })
    //     .then((res) => res.json())
}
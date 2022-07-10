export const listRequests = (userId) => {
    return fetch(`${process.env.REACT_APP_PSICOLOGO_API_URL}/requests/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const listScheduledAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_PSICOLOGO_API_URL}/scheduled/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const listPastAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_PSICOLOGO_API_URL}/pastAppointments/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}
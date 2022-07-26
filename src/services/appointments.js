export const listRequests = (userId) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/requests/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const listScheduledAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/scheduled/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}

export const listPastAppointments = (userId) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/pastAppointments/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    })
        .then((res) => res.json())
}
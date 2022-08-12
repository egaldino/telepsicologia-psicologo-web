export const listRequests = (userId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/requests/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((res) => res.json())
}

export const listScheduledAppointments = (userId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/scheduled/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((res) => res.json())
}

export const listPastAppointments = (userId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/pastAppointments/${userId}`, {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then((res) => res.json())
}

export const acceptRequest = (appointmentId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/accept`, {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({appointmentId})
    })
        .then((res) => res.json())
}

export const denyRequest = (appointmentId, token) => {
    return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/deny`, {
        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({appointmentId})
    })
        .then((res) => res.json())
}
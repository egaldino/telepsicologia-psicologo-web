export const listRequests = (userId, token) => {
    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 1,
                patient: {
                    id: 99999999999,
                    name: "Paciente 1"
                },
                date: "01/12/2022",
                hour: "10:00"
            },
            {
                id: 2,
                patient: {
                    id: 88888888888,
                    name: "Paciente 2"
                },
                date: "01/12/2022",
                hour: "11:00"
            },
            {
                id: 3,
                patient: {
                    id: 77777777777,
                    name: "Paciente 3"
                },
                date: "01/12/2022",
                hour: "12:00"
            }
        ])
    });

    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/requests/${userId}`, {
    //     method: 'GET',
    //     headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    // })
    //     .then((res) => res.json())
}

export const listScheduledAppointments = (userId, token) => {
    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 1,
                patient: {
                    id: 99999999999,
                    name: "Paciente 1"
                },
                date: "01/12/2022",
                hour: "10:00"
            },
            {
                id: 2,
                patient: {
                    id: 88888888888,
                    name: "Paciente 2"
                },
                date: "01/12/2022",
                hour: "11:00"
            },
            {
                id: 3,
                patient: {
                    id: 77777777777,
                    name: "Paciente 3"
                },
                date: "01/12/2022",
                hour: "12:00"
            }
        ])
    });


    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/scheduled/${userId}`, {
    //     method: 'GET',
    //     headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    // })
    //     .then((res) => res.json())
}

export const listPastAppointments = (userId, token) => {
    return new Promise((resolve, reject) => {

        resolve([
            {
                id: 1,
                patient: {
                    id: 99999999999,
                    name: "Paciente 1"
                },
                date: "01/12/2022",
                hour: "10:00"
            },
            {
                id: 2,
                patient: {
                    id: 88888888888,
                    name: "Paciente 2"
                },
                date: "01/12/2022",
                hour: "11:00"
            },
            {
                id: 3,
                patient: {
                    id: 77777777777,
                    name: "Paciente 3"
                },
                date: "01/12/2022",
                hour: "12:00"
            }
        ])
    });


    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/pastAppointments/${userId}`, {
    //     method: 'GET',
    //     headers: {'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    // })
    //     .then((res) => res.json())
}

export const acceptRequest = (appointmentId, token) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    });
        // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/accept`, {
    //     method: 'POST',
    //     headers: {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    //     body: JSON.stringify({appointmentId})
    // })
    //     .then((res) => res.json())
}

export const denyRequest = (appointmentId, token) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    });
    // return fetch(`${process.env.REACT_APP_APPOINTMENT_API_URL}/psychologist/deny`, {
    //     method: 'POST',
    //     headers: {'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    //     body: JSON.stringify({appointmentId})
    // })
    //     .then((res) => res.json())
}
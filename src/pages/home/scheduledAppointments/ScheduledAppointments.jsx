import {Card, CardActions, CardContent, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Link as ReactRouterLink} from "react-router-dom";
import {listScheduledAppointments} from "../../../services/appointments";
import {useSelector} from "react-redux";

const renderDetailsButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="error"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                    alert('Consulta cancelada')
                }}
            >
                Cancelar
            </Button>
        </strong>
    )
}

const columns = [
    { field: 'patient.name', headerName: 'Nome', width: 375, valueGetter: (params) => params.row?.patient?.name  },
    { field: 'date', headerName: 'Data', width: 375 },
    { field: 'actions', headerName: 'Ações', width: 250, renderCell: renderDetailsButton },
];

const ScheduledAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    const userId = useSelector(state => state.value.user.id);
    const token = useSelector(state => state.value.user.token);


    useEffect(()=> {
        listScheduledAppointments(userId, token)
            .then(appointments => setAppointments(appointments))
            .catch(error => console.error(error));
    } , [userId, token])

    return <>
        <Typography variant="h5" component="h1" sx={{marginBottom: 2}}>
            Próximo Atendimento
        </Typography>
        {appointments.length > 0 && <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {appointments[0].patient.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {appointments[0].date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={ReactRouterLink} to={`/call/${appointments[0].patient.id}`}>Entrar na chamada</Button>
                <Button size="small" sx={{color: 'error.main'}}>Cancelar</Button>
            </CardActions>
        </Card>}
        <Divider />
        <Typography variant="h5" component="h1" sx={{marginY: 2}}>
            Atendimentos Agendados
        </Typography>

        <Box sx={{ height: 400, width: '100%', backgroundColor: 'white' }}>
            <DataGrid
                rows={appointments}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>

    </>
}

export default ScheduledAppointments;
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
    { field: 'firstName', headerName: 'Nome', width: 250 },
    { field: 'lastName', headerName: 'Sobrenome', width: 250 },
    { field: 'date', headerName: 'Data', width: 250 },
    { field: 'actions', headerName: 'Ações', width: 250, renderCell: renderDetailsButton },
];

const ScheduledAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    const userId = useSelector(state => state.value.user.id);

    useEffect(()=> {
        listScheduledAppointments(userId)
            .then(appointments => setAppointments(appointments))
            .catch(error => console.error(error));
    } , [userId])

    return <>
        <Typography variant="h5" component="h1" sx={{marginBottom: 2}}>
            Próximo Atendimento
        </Typography>
        <Card>
            {appointments.length > 0 && <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {appointments[0].firstName} {appointments[0].lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {appointments[0].date}
                </Typography>
            </CardContent> }
            <CardActions>
                <Button size="small" component={ReactRouterLink} to="/call">Entrar na chamada</Button>
                <Button size="small" sx={{color: 'error.main'}}>Cancelar</Button>
            </CardActions>
        </Card>
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
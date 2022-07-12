import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {listPastAppointments} from "../../../services/appointments";
import {useSelector} from "react-redux";

const renderDetailsButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {
                    alert('Ver detalhes')
                }}
            >
                Ver detalhes
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

const PastAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    const userId = useSelector(state => state.value.user.id);

    useEffect(()=> {
        listPastAppointments(userId)
            .then(appointments => setAppointments(appointments))
            .catch(error => console.error(error));
    } , [userId])

    return <>
        <Typography variant="h5" component="h1" sx={{marginY: 2}}>
            Atendimentos Realizados
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

export default PastAppointments;
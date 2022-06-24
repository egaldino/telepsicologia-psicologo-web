import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {DataGrid} from '@mui/x-data-grid';
import {useState} from "react";
import Box from "@mui/material/Box";

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
    const [appointments] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', date: '24/06/2022 - 12:00h' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', date: '24/06/2022 - 12:00h' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', date: '24/06/2022 - 12:00h' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', date: '24/06/2022 - 12:00h' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', date: '24/06/2022 - 12:00h' },
        { id: 6, lastName: 'Melisandre', firstName: null, date: '24/06/2022 - 12:00h' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', date: '24/06/2022 - 12:00h' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', date: '24/06/2022 - 12:00h' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', date: '24/06/2022 - 12:00h' },
    ]);


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
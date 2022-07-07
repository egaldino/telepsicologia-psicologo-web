import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import Grid from "@mui/material/Grid";


const Requests = () => {
    const [pendingRequests] = useState([{id: 1, name: 'Myodo', date: '22/06/2022', hour: '12h'},
        {id: 2, name: 'Cuvuo', date: '22/06/2022', hour: '12h'},{id: 3, name: 'Faici', date: '22/06/2022', hour: '12h'},
        {id: 4, name: 'Woyde', date: '22/06/2022', hour: '12h'},{id: 5, name: 'Hauporis', date: '22/06/2022', hour: '12h'},
        {id: 6, name: 'Guas', date: '22/06/2022', hour: '12h'},{id: 7, name: 'Piale', date: '22/06/2022', hour: '12h'},
        {id: 8, name: 'Plamo', date: '22/06/2022', hour: '12h'}]);


    return <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        {pendingRequests.map(pendingRequest =>
            <Grid key={pendingRequest.id} item xs={4}>
                <PendingRequestCard pendingRequest={pendingRequest}/>
            </Grid>
        )}
    </Grid>;
}

function PendingRequestCard({pendingRequest}) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pendingRequest.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pendingRequest.date} - {pendingRequest.hour}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Aceitar</Button>
                <Button size="small" sx={{ color: 'error.main' }}>Recusar</Button>
            </CardActions>
        </Card>
    );
}

export default Requests;
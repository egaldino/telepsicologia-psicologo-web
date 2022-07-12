import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {listRequests} from "../../../services/appointments";
import {useSelector} from "react-redux";


const Requests = () => {

    const [pendingRequests, setPendingRequests] = useState([]);

    const userId = useSelector(state => state.value.user.id);

    useEffect(()=> {
        listRequests(userId)
            .then(requests => setPendingRequests(requests))
            .catch(error => console.error(error));
    } , [userId])

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
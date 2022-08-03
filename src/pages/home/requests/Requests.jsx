import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent} from "@mui/material";
import Button from "@mui/material/Button";
import {useCallback, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {listRequests, acceptRequest, denyRequest} from "../../../services/appointments";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const Requests = () => {

    const navigate = useNavigate();

    const [pendingRequests, setPendingRequests] = useState([]);

    const userId = useSelector(state => state.value.user.id);

    const updateRequests = useCallback(() => {
        listRequests(userId)
            .then(requests => setPendingRequests(requests))
            .catch(error => console.error(error));
    }, [userId]);

    const callAcceptRequest =  (pendingRequestId) => {
        acceptRequest(pendingRequestId)
            .then(() => navigate("/schedule"))
            .catch(error => console.error(error))
    }

    const callDenyRequest =  (pendingRequestId) => {
        denyRequest(pendingRequestId)
            .then(() => updateRequests())
            .catch(error => console.error(error))
    }

    useEffect(()=> {
        updateRequests();
    } , [userId, updateRequests])

    return <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        {pendingRequests.map(pendingRequest =>
            <Grid key={pendingRequest.id} item xs={4}>
                <PendingRequestCard pendingRequest={pendingRequest} callAcceptRequest={callAcceptRequest} callDenyRequest={callDenyRequest}/>
            </Grid>
        )}
    </Grid>;
}

function PendingRequestCard({pendingRequest, callAcceptRequest, callDenyRequest}) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pendingRequest.patient.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pendingRequest.date} - {pendingRequest.hour}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => callAcceptRequest(pendingRequest.id)}>Aceitar</Button>
                <Button size="small" onClick={() => callDenyRequest(pendingRequest.id)} sx={{ color: 'error.main' }}>Recusar</Button>
            </CardActions>
        </Card>
    );
}

export default Requests;
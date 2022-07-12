import React from 'react';
import { Provider } from 'react-redux'

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomeTemplate from "./pages/home/HomeTemplate";
import Requests from './pages/home/requests/Requests'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScheduledAppointments from "./pages/home/scheduledAppointments/ScheduledAppointments";
import PastAppointments from "./pages/home/pastAppointments/PastAppointments";
import Profile from "./pages/home/profile/Profile";
import VideoCall from "./pages/videoCall/VideoCall";
import {store} from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="requests" element={
                        <HomeTemplate title="Solicitações de Consulta">
                            <Requests />
                        </HomeTemplate>}/>
                    <Route path="schedule" element={
                        <HomeTemplate title="Consultas Agendadas">
                            <ScheduledAppointments />
                        </HomeTemplate>}/>
                    <Route path="history" element={
                        <HomeTemplate title="Consultas Realizadas">
                            <PastAppointments />
                        </HomeTemplate>}/>
                    <Route path="profile" element={
                        <HomeTemplate title="Meus Dados">
                            <Profile />
                        </HomeTemplate>}/>
                    <Route path="call" element={<VideoCall/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

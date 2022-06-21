import React from 'react';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomeTemplate from "./pages/home/HomeTemplate";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="requests" element={
                    <HomeTemplate>
                        Solicitacoes
                    </HomeTemplate>}/>
                <Route path="schedule" element={
                    <HomeTemplate>
                        Agendamentos
                    </HomeTemplate>}/>
                <Route path="history" element={
                    <HomeTemplate>
                        Realizadas
                    </HomeTemplate>}/>
                <Route path="profile" element={
                    <HomeTemplate>
                        Perfil
                    </HomeTemplate>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

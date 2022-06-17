import React from 'react';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

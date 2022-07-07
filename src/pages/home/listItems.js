import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link as ReactRouterLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={ReactRouterLink} to={"/requests"}>
            <ListItemIcon>
                <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Solicitações"/>
        </ListItemButton>
        <ListItemButton component={ReactRouterLink} to={"/schedule"}>
            <ListItemIcon>
                <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText primary="Consultas Agendadas" />
        </ListItemButton>
        <ListItemButton component={ReactRouterLink} to={"/history"}>
            <ListItemIcon>
                <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Consultas Realizadas" />
        </ListItemButton>
        <ListItemButton component={ReactRouterLink} to={"/profile"}>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Meus dados" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton component={ReactRouterLink} to={"/"}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItemButton>
    </React.Fragment>
);
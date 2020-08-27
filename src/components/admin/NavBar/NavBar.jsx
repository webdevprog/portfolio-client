import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <WorkIcon />
            </ListItemIcon>
            <NavLink to="/admin/projects"><ListItemText primary="Works" /> </NavLink>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="About me" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Other</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Any" />
        </ListItem>
    </div>
);
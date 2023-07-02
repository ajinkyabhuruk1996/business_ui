import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { isAuthorizedToPerform } from '../../../utils.js';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const OuterDrawer = (props) => {
    const theme = useTheme();

    const { open, handleDrawerClose, handleDrawerOpen } = props;
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    };

    const canAddNewUser = isAuthorizedToPerform("user", "canAddNewUser");

    const menuOptions2 = [
        // { menuLabel: 'Another Demo', routePath: 'demomenu2' }
        // { menuLabel: 'Starred', routePath: 'starred' },
        // { menuLabel: 'Send email', routePath: 'sendemail'},
        // { menuLabel: 'Drafts', routePath: 'drafts'}
    ]

    const menuOptions1 = [
        { menuLabel: 'Add User', routePath: 'adduser', disabled: !canAddNewUser }
        // { menuLabel: 'Starred', routePath: 'starred' },
        // { menuLabel: 'Send email', routePath: 'sendemail'},
        // { menuLabel: 'Drafts', routePath: 'drafts'}
    ]

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {menuOptions1.map((item, index) => (
                    <ListItem key={item.menuLabel} disablePadding className={item.disabled ? 'disabled-link-li' : ''}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Link className={item.disabled ? 'disabled-link' : ''} to={item.routePath}>{item.menuLabel}</Link>
                            {/* <ListItemText primary={item.menuLabel} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuOptions2.map((item, index) => (
                    <ListItem key={item.menuLabel} disablePadding className={item.disabled ? 'disabled-link-li' : ''}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Link className={item.disabled ? 'disabled-link' : ''} to={item.routePath}>{item.menuLabel}</Link>
                            {/* <ListItemText primary={item.menuLabel} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default OuterDrawer;
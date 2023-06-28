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


const Main = styled('main', {
    shouldForwardProp: (props) => props !== 'open',
})(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (props) => props !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


// ['All mail', 'Trash', 'Spam'].


const AdminPortalHomePage = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ justifyContent: "space-between", height: '83px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Portal

                    </Typography>
                    <Box sx={{ display: 'flex' }}>

                        <IconButton
                            color="inherit"
                            aria-label="Home"
                            onClick={navigateToHome}
                            edge="start"
                            sx={{ mr: 2 }}
                        >

                            <Home />


                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>
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
            <Main open={open}>
                <DrawerHeader />
                <Outlet />
                {/* Here we display sub routes in admin portal.
                 Consequat mauris nunc congue nisi. */}
            </Main>
        </Box>
    );
}

export default AdminPortalHomePage;
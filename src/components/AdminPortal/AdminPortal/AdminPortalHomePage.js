import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import OuterDrawer from './LeftMenuPanel/DrawerComponent.js'

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
            <OuterDrawer open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
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
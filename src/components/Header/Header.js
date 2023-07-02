import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logoutFunction } from '../Forms/Logout/LogoutControl.js';
import logo from './images/brand.png';
import './Header.css';
import { isAuthorizedToPerform } from '../../utils.js';

const AccountMenu = (props) => {
    const { navigate } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // const canAddNewUser = isAuthorizedToPerform( "user", "canAddNewUser");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = (event) => {
        logoutFunction()
        navigate('/')
    }

    return (
        <React.Fragment>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* {customerButtons()}
                {adminPortalButtons()}
                {authButton()} */}
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/*     TODO : Intended functionality for future Do NO DELETE below comments.
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem> */}
                {/* {
                    canAddNewUser ? (
                        <MenuItem onClick={ () => { navigate('/adduser') }}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add New User
                        </MenuItem>
                    ) : ''
                } */}

                <MenuItem onClick={() => { handleClose(); handleLogoutClick(); }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

const authButton = (navigate) => {

    const handleLogoutClick = (event) => {
        logoutFunction()
        navigate('/')
    }

    if (sessionStorage.getItem("userloggedIn") === null) {
        return (
            <>
                <Nav.Link className="link" active="true" href="/signup">Sign Up</Nav.Link>
                <Nav.Link className="link" active="true" href="/login">Login</Nav.Link>
            </>
        )

    }
    // else {
    //     return <Nav.Link className="link" active="true" target="_blank" href="/" rel="noreferrer" onClick={handleLogoutClick}>Logout</Nav.Link>
    // }
}

const adminPortalButtons = () => {
    const hasAdminPortalAccess = isAuthorizedToPerform( "adminPortal", "hasAccessToAdminPortal");

    if (hasAdminPortalAccess === true) {
        return (
            <>
                <Nav.Link className="link" active="true" href="/adminportal">Admin Portal</Nav.Link>
            </>
        )
    }
}

const customerButtons = () => {
    const hasBookingAccess = isAuthorizedToPerform( "enquiry", "hasAccessToBooking");

    if (hasBookingAccess === true) {
        return (
            <>
                <Nav.Link className="link" active="true" href="/booking">Booking</Nav.Link>
            </>
        )
    }
}

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="headerContainer">
            <Navbar className="navBarStyle navbar" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/" className="brandName" >
                    <img
                        alt="logo"
                        src={logo}
                        width="60"
                        height="60"
                    />
                    {' '}
                    ElectroShop
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end navOptions">
                    <Nav>
                        <Nav.Link className="link" active="true" href="/aboutus">About us</Nav.Link>
                        {customerButtons()}
                        {adminPortalButtons()}
                        {authButton(navigate)}
                        {sessionStorage.getItem("userloggedIn") != null ? <AccountMenu navigate={navigate} /> : <></>}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default Header;

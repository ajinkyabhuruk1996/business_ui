import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logoutFunction } from '../Forms/Logout/LogoutControl.js';
import logo from './images/brand.png';
import './Header.css';

const Header = ()=>{
    const navigate = useNavigate();
    
    const handleLogoutClick = (event) => {
        logoutFunction(event)
        navigate('/')
    }

    const authButton = () => {
        if (sessionStorage.getItem("userloggedIn") === null) {
            return (
                <>
                    <Nav.Link className="link" active="true" href="/signup">Sign Up</Nav.Link> 
                    <Nav.Link className="link" active="true" href="/login">Login</Nav.Link>
                </>
            )
                
        } else {
            return  <Nav.Link className="link" active="true" target="_blank" href="/" rel="noreferrer" onClick={handleLogoutClick}>Logout</Nav.Link>
        }
    }

    const adminPortalButtons = () => {
        const hasAccessToAdminPortal = JSON.parse(sessionStorage.getItem("userCapabilites"))?.adminPortal?.hasAccessToAdminPortal;
        if (hasAccessToAdminPortal === true) {
            return(
                <>
                    <Nav.Link className="link" active="true" href="/adminportal">Admin Portal</Nav.Link>
                </>
            )
        }
    }

    return(
        <div className="headerContainer">
            <Navbar className= "navBarStyle navbar" variant="dark" expand="lg" fixed="top">
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
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end navOptions">
                    <Nav>
                        <Nav.Link className="link" active="true" href="/aboutus">About us</Nav.Link> 
                        {/* <Nav.Link className="link" active="true" href="/planning">Plan your trip</Nav.Link> 
                        <Nav.Link className="link" active="true" href="/policies">Policies</Nav.Link> */}
                        {/* <Nav.Link className="link" active="true" href="/signup">Sign Up</Nav.Link> 
                        <Nav.Link className="link" active="true" href="/login">Login</Nav.Link> */}
                        {adminPortalButtons()}
                        {authButton()}
                        {/* <Nav.Link className="link" active="true" href="/booking">Booking</Nav.Link> */}
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import 'weather-icons/css/weather-icons.css'

import Header from './components/Header/Header.js'
import PageNotFound404 from './components/PageNotFound404/PageNotFound404.js'
import Home from './components/Home/Home.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import Footer from './components/Footer/Footer.js'
import Login from './components/Forms/Login/Login.js'
import SignUp from './components/Forms/SignUp/SignUp.js'
import Policies from './components/Guidelines/Policies.js'
import Planning from './components/PlanningTrip/PlanningTrip.js'
import Weather from './components/Weather/Weather.js'
import Booking from './components/Forms/Booking/Booking.js'
import SolarPanelListing from './components/Products/ProductListing/SolarPanelListing.js'
import SolarHeatersListing from './components/Products/ProductListing/SolarHeatersListing.js'
import ProductListing from './components/Products/ProductListing/ProductListing.js';
import AdminPortalHomePage from './components/AdminPortal/AdminPortal/AdminPortalHomePage.js';

import './App.css';


const Protected = ({ component: Component, ...routeProps }) => {
  const { loading, isAuthenticated, user, area, accessTo } = routeProps
  const isAdmin =true;
  
  const hasAccess= JSON.parse(sessionStorage.getItem("userCapabilites"))?.[area]?.[accessTo];
  // JSON.parse(sessionStorage.getItem("userCapabilites"))?.["adminPortal"]?.["hasAccessToAdminPortal"]

  if (!loading && !hasAccess) {
    return <Navigate to="/login" />;
  }
  // if (!loading && isAdmin === true && user?.role !== "admin") {
  //   return <Navigate to="/login" />;
  // }

  return (
    <Fragment>
      <Component {...routeProps} />
      {/* {loading === false ? (
       <Component {...routeProps} />
      ) : null} */}
    </Fragment>
  );
};

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/policies" element={<Policies />}></Route>
            <Route path="/planning" element={<Planning />}></Route>
            <Route path="/weather" element={<Weather />}></Route>
            <Route
              exact path='/booking'
              element={
                <Protected component={Booking}
                area={"enquiry"}
                accessTo={"hasAccessToBooking"}
              />} 
            />
            <Route
              exact path='/adminportal'
              element={
                <Protected component={AdminPortalHomePage}
                area={"adminPortal"}
                accessTo={"hasAccessToAdminPortal"}
              />} 
            />
            <Route exact path="/productlist/solarpanel" element={<SolarPanelListing />}></Route>
            <Route exact path="/productlist/solarheater" element={<SolarHeatersListing />}></Route>
            <Route path="/productlist/*" element={<ProductListing />}></Route>
            <Route path="/404" element={<PageNotFound404 />}></Route>
            <Route path="*" element={<PageNotFound404 />}></Route>
            {/* <Navigate to="/404" /> */}
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
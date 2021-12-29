import React, { Component }  from 'react';

import { BrowserRouter } from "react-router-dom";
import Router from "./route/router";
import "./App.css";
import Navbar from './components/common/navbar';

function App(props) {
  return (
    <BrowserRouter>
          <Navbar
        NavbarTitle="Shopping Cart"
        NavbarAbout="About"
        NavbarSearch="Search"
        NavbarHome="Home"
      />
      <Router {...props} />
      
    </BrowserRouter>
  );
}

export default App;

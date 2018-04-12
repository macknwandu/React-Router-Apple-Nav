import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import SubNavigation from "./SubNavigations";


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navigation />
        <Route path="/:product" component={SubNavigation} />
      </div>
    );
  }
}

export default Header;
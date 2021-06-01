import React, { Component } from 'react'
import {
  NavLink
} from "react-router-dom";
export class Nav extends Component {
  render() {
    return (
      <nav >
        <NavLink style={{ margin: '1rem' }} className="navbar-item" activeClassName="is-active" to="/">
          Home
            </NavLink>

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/fav"
        >
          Favorite
            </NavLink>
      </nav>

    )
  }
}

export default Nav

import React from 'react';
import { NavList, NavItem } from './styledComponent';
import { NavLink } from 'react-router-dom';

export default function PageNav() {
  return (
    <NavList>
      <NavItem>
        <NavLink exact to="/" className="link" activeClassName="selected">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/movies" className="link" activeClassName="selected">
          SearchMovies
        </NavLink>
      </NavItem>
    </NavList>
  );
}

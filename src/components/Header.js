import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          <img src="https://image.flaticon.com/icons/svg/361/361680.svg" width="50"/>sw navigation</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">people</Link>
        </li>
        <li>
          <Link to="/planets/">planets</Link>
        </li>
        <li>
          <Link to="/starships/">starships</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
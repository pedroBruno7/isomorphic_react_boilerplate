import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/link1'>Link1</Link></li>
            <li><Link to='/link2'>Link2</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;
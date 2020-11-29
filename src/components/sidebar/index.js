import React from 'react';
// import { Link } from 'react-router-dom';
import './index.css';
import Instagram from './Instagram.svg';
import { TiSocialInstagram } from 'react-icons/ti';
import { sidebarData } from './sidebarData';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="navbar-toggle">
        <span className="instagram-icon">
          <TiSocialInstagram size={40} />
        </span>
        <span className="instagram-text">
          <img src={Instagram} alt="Instagram" />
        </span>
      </div>

      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <p>
                  {/* <Link to={item.path}> */}
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-title">{item.title}</span>
                  {/* </Link> */}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;

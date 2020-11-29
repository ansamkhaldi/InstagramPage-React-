import React from 'react';
import './index.css';
import ProfileImg from '../ImageProfile';
import Profile from './profileImage.jpg';
import { ImCamera } from 'react-icons/im';
import { HiSearch } from 'react-icons/hi';

function Header() {
  return (
    <header className="header">
      <div className="img-header">
        <ImCamera size={37} />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button
          style={{
            backgroundColor: ' #F5F5F5',
            height: '36px',
            color: '#F73E60',
            borderRadius: '0 20px 20px 0',
            paddingRight: '10px',
            width: '50px',
            border: 'none',
          }}
        >
          <HiSearch
            size={25}
            style={{
              color: '#F73E60',
            }}
          />
        </button>
      </div>

      <div className="profile">
        <ProfileImg src={Profile} size="50px" />
        <div className="spans">
          <div
            style={{
              fontWeight: '700',
              width: '90px',
              color: ' #F73E60',
              fontSize: '12px',
            }}
          >
            Emma Watson
          </div>
          <div style={{ color: '#9E9E9E', width: '90px', fontSize: '10px' }}>
            Actress, Model
          </div>
          <div style={{ color: '#9E9E9E', width: '90px', fontSize: '10px' }}>
            paris, France
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

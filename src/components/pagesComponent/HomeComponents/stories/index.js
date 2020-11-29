import React from 'react';
import './index.css';
import { IoIosAdd } from 'react-icons/io';
import CoverImg from '../../../CoverProfile';
import Cover from './air.jpg';

function Stories(props) {
  return (
    <div className="story">
      <div className="stories-icon">
        <div style={{ marginTop: '15px' }}>
          <div className="circle">
            <IoIosAdd
              size={20}
              style={{
                color: 'white',
                borderStyle: 'dashed',
                borderWidth: '1px',
                fontWeight: '900',
              }}
            />
          </div>
          <span
            style={{
              color: ' rgba(117, 114, 114, 0.801)',
              marginLeft: '15px',
              fontSize: '13px',
            }}
          >
            Add Story
          </span>
        </div>
      </div>
      <div className="stories-pub">
        <div className="margeStory">
          <div className="div-stories">
            <CoverImg
              src={Cover}
              width="150px"
              height="70px"
              className="coverImage"
            />
            <div className="Text">
              <span className="item-icon">#Technology</span>
              <span className="item-icon1">#Android</span>
            </div>
          </div>
          <div className="div-stories">
            <CoverImg
              src={Cover}
              width="150px"
              height="70px"
              className="coverImage"
            />
            <div className="Text">
              <span className="item-icon">#Technology</span>
              <span className="item-icon1">#Android</span>
            </div>
          </div>
          <div className="div-stories">
            <CoverImg
              src={Cover}
              width="150px"
              height="70px"
              className="coverImage"
            />
            <div className="Text">
              <span className="item-icon">#Technology</span>
              <span className="item-icon1">#Android</span>
            </div>
          </div>
          <div className="div-stories">
            <CoverImg
              src={Cover}
              width="150px"
              height="70px"
              className="coverImage"
            />
            <div className="Text">
              <span className="item-icon">#Technology</span>
              <span className="item-icon1">#Android</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;

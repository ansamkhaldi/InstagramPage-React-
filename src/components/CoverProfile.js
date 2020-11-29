import React from 'react';
//import ProfileImg from './ImageProfile';
import Profile from '../components/pagesComponent/HomeComponents/stories/story1.svg';

export default function CoverImg(props) {
  return (
    <div
      style={{
        zIndex: '-1',
        backgroundImage: `url(${props.src})`,
        width: `${props.width}`,
        height: `${props.height}`,
        borderRadius: '40px 0 0 40px',
      }}
    >
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      > */}
      <img
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
          backgroundColor: 'white',
        }}
        src={Profile}
        alt="img"
      ></img>
      {/* </div> */}
    </div>
  );
}

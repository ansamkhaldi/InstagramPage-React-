import React from 'react';
import '../App.css';

export default function ProfileImg(props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        // className="imagProfile"
        style={{
          width: `${props.size}`,
          height: `${props.size}`,
          borderRadius: '50%',
          border: `${props.border}`,
          marginLeft: `${props.marginLeft}`,
        }}
        src={props.src}
        alt="img"
      ></img>
    </div>
  );
}

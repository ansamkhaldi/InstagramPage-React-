import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import ProfileImg from '../../../ImageProfile';
import Profile from '../stories/story2.svg';
import ImagPub from './ImagPub.jpg';
import { FcLike } from 'react-icons/fc';
import { ImBookmark } from 'react-icons/im';
import { RiSendPlaneLine } from 'react-icons/ri';
import { GoComment } from 'react-icons/go';

export default function ItemPublic(props) {
  return (
    <div
      style={{
        width: '204px',
        height: '238px',
        backgroundColor: 'white',
        boxShadow: '0px 2px 2px 2px #E7E7E7 ',
        margin: '17px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '42px',
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <ProfileImg
          src={Profile}
          size="30px"
          border="2px solid #f73e60"
          marginLeft="10px"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '22px',
            marginBottom: '25px',
            marginLeft: '10px',
          }}
        >
          <span
            style={{
              color: '#2C2C2B',
              width: '90px',
              fontSize: '11px',
              fontStyle: 'bold',
            }}
          >
            Emma Watson
          </span>
          <span style={{ color: '#9E9E9E', width: '90px', fontSize: '10px' }}>
            Paris, France
          </span>
        </div>
        <div
          style={{
            marginLeft: '30px',
          }}
        >
          <HiDotsVertical
            style={{
              display: 'flex',
              justifyContent: 'end',
              height: '42px',
              width: '20px',
              color: '#f73e60',
            }}
          />
        </div>
      </div>
      <div style={{ width: '100%', height: '162px' }}>
        <img
          src={ImagPub}
          alt="imag"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div style={{ width: '100%', height: '35px', display: 'flex' }}>
        <div
          style={{
            width: '40%',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            color: 'darkgrey',
          }}
        >
          <FcLike />
          <GoComment />
          <RiSendPlaneLine />
        </div>

        <div
          style={{
            width: '50%',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: 'darkgrey',
          }}
        >
          <ImBookmark />
        </div>
      </div>
    </div>
  );
}

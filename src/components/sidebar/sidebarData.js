import React from 'react';

import { FaPowerOff, FaCog, FaBell, FaHome } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import { RiWirelessChargingLine } from 'react-icons/ri';

export const sidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome className="icon" />,
    cName: 'nav-text',
  },
  {
    title: 'Live',
    path: '/Live',
    icon: <RiWirelessChargingLine className="icon" />,
    cName: 'nav-text',
  },
  {
    title: 'Message',
    path: '/Message',
    icon: <BiMessage className="icon" />,
    cName: 'nav-text',
  },
  {
    title: 'Notification',
    path: '/Notification',
    icon: <FaBell className="icon" />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <FaCog className="icon" />,
    cName: 'nav-text',
  },
  {
    title: 'Logout',
    path: '/Logout',
    icon: <FaPowerOff className="icon" />,
    cName: 'nav-text',
  },
];

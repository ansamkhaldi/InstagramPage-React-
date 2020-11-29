import React from 'react';
import ItemPublic from './ItemPublic';

export default function Publication(props) {
  return (
    <div
      style={{
        display: 'flex',
        width: '816px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <ItemPublic />
      <ItemPublic />
      <ItemPublic />
      <ItemPublic />
      <ItemPublic />
      <ItemPublic />
    </div>
  );
}

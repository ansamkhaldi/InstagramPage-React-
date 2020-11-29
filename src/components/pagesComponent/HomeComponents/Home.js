import React from 'react';
import Stories from './stories';
import Publication from './Publications';

function Home(props) {
  return (
    <div className="stories">
      <Stories />
      <Publication />
    </div>
  );
}

export default Home;

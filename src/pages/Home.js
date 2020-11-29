import React from 'react';
import Stories from '../components/pagesComponent/HomeComponents/stories';
import Publication from '../components/pagesComponent/HomeComponents/Publications';

function Home(props) {
  return (
    <div className="stories">
      <Stories />
      <Publication />
    </div>
  );
}

export default Home;

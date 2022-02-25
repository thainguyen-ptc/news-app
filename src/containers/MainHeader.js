import React from 'react';

import sourceNews from 'mock-data/sources';
import MainHeaderComponent from 'components/MainHeader/MainHeader';

function MainHeader () {
  return <MainHeaderComponent sources={sourceNews} />;
}

export default MainHeader;

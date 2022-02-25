import React from 'react';

import { StyledContainer } from './MainFooter.style';

function MainFooter () {
  return <StyledContainer className="text-center w-100 mt-auto py-4 py-md-5 bg-dark">
    <div className="container">
      <div className="inner d-flex flex-column flex-md-row justify-content-center">
        <p className="mb-0">News App using <a
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer">
          NewsApi
        </a>,</p>
        <p className="mt-1 mb-0 mt-md-0 ml-md-1">by <a
          href="https://github.com/thainguyen-ptc/"
          target="_blank"
          rel="noopener noreferrer">
          @thainguyen-ptc
        </a>.</p>
      </div>
    </div>
  </StyledContainer>;
}

export default MainFooter;

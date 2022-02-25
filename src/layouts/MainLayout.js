import React from 'react';
import { oneOfType, func, node, object } from 'prop-types';

import { StyledContainer } from './MainLayout.style';

function MainLayout ({ children, ...restProps }) {
  return <StyledContainer className="d-flex flex-column justify-content-center align-items-center">
    { restProps.header ? <restProps.header /> : null }
    { children }
    { restProps.footer ? <restProps.footer /> : null }
  </StyledContainer>;
}

MainLayout.propTypes = {
  header: oneOfType([func, object]),
  children: node.isRequired,
  footer: oneOfType([func, object])
};

export default MainLayout;

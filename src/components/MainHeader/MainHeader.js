import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import debounce from 'lodash.debounce';

import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';

import { StyledContainer, StyledRightSideBarWrapper } from './MainHeader.style';

function MainHeader ({ sources }) {
  const toggleShowingRightSidebarHandler = debounce(onToggleShowingRightSidebar, 500);

  function onToggleShowingRightSidebar (isShowing) {
    const toggleClass = 'mb-sidebar-open',
      bodyElement = document?.querySelector('body');

    if (!bodyElement) {
      return;
    }

    const bodyElementClasslist = bodyElement.classList || '',
      isContainsToggleClass = bodyElementClasslist.contains(toggleClass);

    switch (true) {
      case isShowing && !isContainsToggleClass:
        bodyElementClasslist.add(toggleClass);
        break;
      case !isShowing && isContainsToggleClass:
        bodyElementClasslist.remove(toggleClass);
        break;
      default: break;
    }
  }

  return <StyledContainer className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark w-100">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="left-content">
          <a className="navbar-brand" href="/">
            <h2 className="d-md-none m-0">News</h2>
            <h1 className="d-none d-md-block m-0">News</h1>
          </a>
        </div>
        <div className="right-content">
          <StyledRightSideBarWrapper onToggle={ toggleShowingRightSidebarHandler }>
            <Dropdown.Toggle variant="info" split={ false } className="border-0">
              -- All resources --
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" renderOnMount className="p-0">
              <Dropdown.Item className="p-0 backdrop" />
              <div className="pt-3 pb-3 dropdown-inner">
                {
                  sources.map(source => <Dropdown.Item
                    as="button"
                    key={ source.id }
                    type="button"
                    className="btn btn-link text-center">
                    <Link href={ `/category/${source.id}` } passHref>
                      <a href="/">{ source.name }</a>
                    </Link>
                  </Dropdown.Item>)
                }
              </div>
            </Dropdown.Menu>
          </StyledRightSideBarWrapper>
        </div>
      </div>
    </div>
  </StyledContainer>;
}

MainHeader.propTypes = {
  sources: arrayOf(shape({
    id: string.isRequired,
    name: string
  }))
};

MainHeader.defaultProps = {
  sources: []
};

export default MainHeader;

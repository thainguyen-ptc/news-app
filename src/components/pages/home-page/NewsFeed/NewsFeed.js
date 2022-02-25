import React from 'react';
import {
  arrayOf,
  shape,
  bool,
  string
} from 'prop-types';
import { isMobileOnly } from 'react-device-detect';
import classnames from 'classnames';

import { StyledContainer } from './NewsFeed.style';
import ArticleCard from './ArticleCard';
import ArticleCardPlaceholder from './ArticleCardPlaceholder';

function NewsFeed ({ data, isClientSide }) {
  const coverImageRatio = isClientSide && !isMobileOnly
    ? 16 / 9
    : 1;

  return <>{
    isClientSide
      ? <StyledContainer className="mt-3 mt-md-4 p-3">
        {
          data.map((article, index) => <li
            key={ article.url }
            aria-label="News Feed Item"
            className={ classnames({ 'mt-4 mt-md-5': index > 0 }) }>
            <ArticleCard
              data={ article }
              coverImageRatio={ coverImageRatio }
              isRenderHighResolutionImage={ !isMobileOnly } />
          </li>)
        }
      </StyledContainer>
      : <StyledContainer aria-label="News Feed Loading Placeholder" className="mt-3 p-3">
        <ArticleCardPlaceholder />
      </StyledContainer>
  }</>;
}

NewsFeed.propTypes = {
  data: arrayOf(shape({
    url: string
  })),
  isClientSide: bool
};

NewsFeed.defaultProps = {
  data: [],
  isClientSide: false
};

export default NewsFeed;

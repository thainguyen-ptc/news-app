import React from 'react';

import { StyledArticleCardPlaceholderWrapper as StyledContainer } from './NewsFeed.style';
import LazyImage from 'components/LazyImage/LazyImage';

function ArticleCardPlaceholder () {
  return <StyledContainer>
    <div className="d-md-none left-content">
      <LazyImage
        src=""
        ratio={ 1 } />
    </div>
    <div className="d-none d-md-block left-content">
      <LazyImage
        src=""
        ratio={ 16 / 9 } />
    </div>
    <div className="right-content"></div>
  </StyledContainer>;
}

export default ArticleCardPlaceholder;

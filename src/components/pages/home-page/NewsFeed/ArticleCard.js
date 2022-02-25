import React from 'react';
import {
  oneOfType,
  shape,
  bool,
  number,
  string
} from 'prop-types';
import Link from 'next/link';

import { StyledArticleCardWrapper as StyledContainer } from './NewsFeed.style';
import LazyImage from 'components/LazyImage/LazyImage';
import ArticleAuthorInfo from 'components/ArticleAuthorInfo/ArticleAuthorInfo';

function ArticleCard ({ data, coverImageRatio }) {
  return <StyledContainer className="row m-0">
    <Link href={ data?.url } passHref>
      <a
        aria-label="Cover Image"
        href="/"
        className="col-4 col-md-5 p-0 left-content"
        target="_blank"
        rel="noopener noreferrer">
        <LazyImage
          src={ data?.urlToImage || '' }
          ratio={ coverImageRatio } />
      </a>
    </Link>
    <div className="col-8 col-md-7 pl-3 pl-md-4 pr-0 right-content">
      <ul className="d-flex flex-wrap tags-wrapper">
        <li
          key={ data?.source?.id }
          className="text-muted mb-1 mr-1 px-1 border border-secondary rounded">
          { data?.source?.name }
        </li>
      </ul>
      <Link href={ data?.url } passHref>
        <a
          href="/"
          className="d-block text-dark text-decoration-none mt-2 mt-md-3 pt-1 pt-md-0 title"
          target="_blank"
          rel="noopener noreferrer">
          <h4 className="m-0">{ data?.title || '--' }</h4>
        </a>
      </Link>
      {data?.content && <p className="mt-3 description">{data?.content}</p>}
      <div className="mt-3">
        <ArticleAuthorInfo
          data={{
            id: `author-${data?.url}`,
            avatarUrl: '/',
            slug: '#',
            displayName: data?.author
          }}
          updatedAt={ data?.publishedAt }
          timeToReadInMinutes={ data.timeToReadInMinutes } />
      </div>
    </div>
  </StyledContainer>;
}

ArticleCard.propTypes = {
  data: shape({
    title: string,
    url: string.isRequired,
    urlToImage: string,
    author: string,
    publishedAt: string,
    source: shape({
      id: oneOfType([string, number]),
      name: string
    })
  }),
  coverImageRatio: number,
  isRenderHighResolutionImage: bool
};

ArticleCard.defaultProps = {
  data: {},
  coverImageRatio: 1,
  isRenderHighResolutionImage: false
};

export default ArticleCard;

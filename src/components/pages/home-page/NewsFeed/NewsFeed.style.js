import styled from 'styled-components';

import { COLORS } from 'constants/app-styles.constant';

import {
  medias,
  pixelsToRem,
  textMultiLinesTruncate
} from 'styles/mixins.style';

export const StyledContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledArticleCardWrapper = styled.article`
  .left-content {}
  .tags-wrapper {
    font-size: ${ pixelsToRem(12) };
    line-height: 140%;
    list-style: none;
    padding: 0;
  }
  .title {
    h4 {
      font-size: ${ pixelsToRem(16) };
      line-height: 120%;
      ${ textMultiLinesTruncate(1) };
    }
  }
  .description {
    font-size: ${ pixelsToRem(12) };
    line-height: 140%;
    color: ${ COLORS.GRAY44 };
    ${ textMultiLinesTruncate(2) };
  }
  ${medias.MEDIUM_SCREEN`
    .title {
      h4 {
        font-size: ${ pixelsToRem(20) };
        ${ textMultiLinesTruncate(2) };
      }
    }
    .description {
      font-size: ${ pixelsToRem(16) };
      line-height: 160%;
    }
  `}
  ${medias.LARGE_SCREEN`
    .description {
      ${ textMultiLinesTruncate(3) };
    }
  `}
`;

export const StyledArticleCardPlaceholderWrapper = styled(StyledArticleCardWrapper)``;

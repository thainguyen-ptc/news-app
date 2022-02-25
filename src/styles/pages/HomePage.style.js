import styled from 'styled-components';

import { medias, pixelsToRem } from 'styles/mixins.style';

export const StyledContainer = styled.main`
  padding: ${ pixelsToRem(100) } 0;
  ${medias.MEDIUM_SCREEN`
    padding-top: ${ pixelsToRem(120) };
  `}
`;

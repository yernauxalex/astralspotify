import styled from 'styled-components';
import fonts from './fonts';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  font-size: ${fonts.standard.footer};
  img {
    min-width: 70px;
    min-height: 70px;
  }
  @media (max-width: 600px) {
    font-size: ${fonts.media600.footer};
  }
  @media (max-width: 280px) {
    font-size: ${fonts.media280.footer};
  }
`;

export default StyledFooter;

import styled from 'styled-components';
import fonts from './fonts';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 100%;
  font-size: ${fonts.standard.footer};
  p {
    margin: 0;
  }
  img {
    min-width: 70px;
    min-height: 70px;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    font-size: ${fonts.media600.footer};
  }
  @media (max-width: 280px) {
    font-size: ${fonts.media280.footer};
  }
`;

export default StyledFooter;

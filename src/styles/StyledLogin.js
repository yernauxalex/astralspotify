import styled from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 2;
  height: 80%;
  width: 100%;
  p {
    font-size: ${fonts.standard.pLogin};
    text-align: center;
    padding: 1rem;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
    border: 1px solid ${colors.text};
    background-color: ${colors.spotifyGreen};
    padding: 1rem;
    border-radius: 5px;
    &:hover {
      color: ${colors.secondary};
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: ${fonts.media600.pLogin};
    }
  }
  @media (max-width: 280px) {
    p {
      font-size: ${fonts.media280.pLogin};
    }
  }
`;

export default StyledLogin;

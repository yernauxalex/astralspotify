import styled from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const StyledResult = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  font-size: ${fonts.standard.mainSection};
  .container-select {
    display: flex;
    flex-direction: raw;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }
  input {
    border: 1px solid ${colors.text};
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid ${colors.text};
    background-color: ${colors.spotifyGreen};
    padding: 1rem;
    border-radius: 5px;
    &:hover {
      color: ${colors.secondary};
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 600px) {
    font-size: ${fonts.media600.mainSection};
  }
  @media (max-width: 280px) {
    font-size: ${fonts.media280.mainSection};
  }
`;

export default StyledResult;

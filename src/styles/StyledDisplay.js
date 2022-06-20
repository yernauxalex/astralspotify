import styled from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const StyledDisplay = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: ${colors.text};
    font-size: ${fonts.standard.pResult};
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  h2 {
    color: ${colors.text};
    font-size: ${fonts.standard.h2};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h3 {
    color: ${colors.text};
    font-size: ${fonts.standard.h3};
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .main-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: stretch;
    gap: 1rem;
    padding: 0;
  }
  .main-list-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    min-width: 5rem;
    width: fit-content;
    border: 1px solid ${colors.text};
    border-radius: 5px;
    padding: 1rem 1rem;
    height: fit-content;
    background-color: ${colors.cardBackground};
    //shadow on hover
    &:hover {
      background-color: ${colors.secondary};
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }

  .secondary-list {
    padding: 0;
    font-size: ${fonts.standard.secondaryList};
  }
  .secondary-list-items {
    list-style: none;
  }
  @media (max-width: 600px) {
    p {
      font-size: ${fonts.media600.pResult};
    }
    h2 {
      font-size: ${fonts.media600.h2};
    }
    h3 {
      font-size: ${fonts.media600.h3};
    }
    .secondary-list {
      font-size: ${fonts.media600.secondaryList};
    }
  }
  @media (max-width: 280px) {
    p {
      font-size: ${fonts.media280.pResult};
    }
    h2 {
      font-size: ${fonts.media280.h2};
    }
    h3 {
      font-size: ${fonts.media280.h3};
    }
    .secondary-list {
      font-size: ${fonts.media280.secondaryList};
    }
  }
`;

export default StyledDisplay;

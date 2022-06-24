import styled from 'styled-components';
// import colors from './colors';
// import fonts from './fonts';

const StyledVote = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .genre-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.2rem;
    }
    #label {
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        padding-bottom: 0.2rem;
    }
    .sign-container-desc {
        min-width: 1.5rem;
    }
    .sign-container-desc > input {
        appearance: none;
    }
    .genre-container > label {
        padding-right: 0.5rem;
    }
    .sign-container-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .sign-container {
        min-width: 1.5rem;
    }
`;

export default StyledVote;

import styled from 'styled-components';
import colors from './colors';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 100%;
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
`

export default StyledLogin
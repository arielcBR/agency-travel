import styled from "styled-components";

export const WhatsappButtonContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 50%;
    padding: 2rem;

    position: fixed;
    bottom: 2rem;
    right: 2rem;

    height: 9rem;
    width: 9rem;
    transition: 2s ease-in-out;
    z-index: 100;

    > img {
        height: 7rem;
        width: 7rem;
    }

    :hover {
        transform: scale(1.1);
    }
`
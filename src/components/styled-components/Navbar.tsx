import styled from "styled-components";

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const NavbarLogo = styled.figure`
    img {
        width: 10rem;
    }
`;

export const NavbarNav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        li {
            margin-left: 1rem;
            a {
                text-decoration: none;
                color: var(--color-primary);
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease-in-out;
                &:hover {
                    color: var(--color-primary-hover);
                }
            }
        }
    }
`;

export const NavbarSearch = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    height: 1.8rem;
    padding: 0 0.7rem;
    color: var(--color-primary);
    svg {
        font-size: 70%;
        color: var(--color-primary);
    }
    input{
        border: none;
        outline: none;
        height: 70%;
        padding: 0 1rem;
        font-size: 0.9rem;
        font-weight: 500;
    }

`;
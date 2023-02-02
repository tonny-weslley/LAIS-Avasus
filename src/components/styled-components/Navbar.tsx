import styled from "styled-components";
import Navbar from "../Navbar";

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #fff;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  -webkit-box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.75);
`;

export const NavbarLogo = styled.figure`
  img {
    width: 10rem;
  }
`;

export const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1rem;
      a {
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--color-primary-hover);
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 1281px) {
    display: none;
  }
`;

export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  height: 1.8rem;
  width: 20rem;
  padding: 0 0.7rem;
  color: var(--color-primary);
  svg {
    font-size: 70%;
    color: var(--color-primary);
  }
  input {
    border: none;
    outline: none;
    height: 70%;
    width: 100%;
    padding: 0 1rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 1281px) {
    display: none;
  }
`;

export const NavbarInline = styled(NavbarNav)`
  
  display: none;
  @media (min-width: 1400px) {
  
  margin: 2vh auto 0 auto;
  display: flex;
  width: 100%;
  justify-content: start;

  }

`;

export const NavbarInlineInicio = styled.nav`

  display: none;
  
  @media (min-width: 768px) {
    margin: 2vh auto 0 auto;
    display: flex;
    width: 100%;
    justify-content: start;
    
  }
`;

export const NavbarInilineAction = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  width: fit-content;
  &:hover {
    cursor: pointer;
    color: var(--color-primary-hover);
  }
`;

export const NavbarInlineActionInicio = styled(NavbarInilineAction)`

  font-size: 1rem;


`;

export const NavbarAuthButtons = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1281px) {
    display: none;
  }
`;

export const ResponsiveNavbar = styled.div`
  display: none;
  @media (max-width: 1281px) {
    display: flex;
  }
`;

export const NavbarDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 50vw;
  background-color: #fff;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      margin: 1rem 0;
      a {
        text-decoration: none;
        color: var(--color-primary);
        font-size: 1rem;
        font-weight: 500;
        margin: 1rem 0;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--color-primary-hover);
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 768px) {
    width: 30vw;
`;

export const NavBreadcrumb = styled.div`
  margin: 1vh 0;
  display: flex;
  a{
    text-decoration: none;
    color: var(--color-primary);
    font-size: 0.9rem;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: var(--color-primary-hover);
      cursor: pointer;
    }
    &:last-child{
      font-weight: bold;
    }
  }
`;
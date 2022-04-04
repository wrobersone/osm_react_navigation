import React from 'react'
import { routes } from '../../constant'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <SNavbar>
        <NavContainer>
            <SNavbarBrand>LOGO</SNavbarBrand>
            <RightNav>
                <NavRoutes>
                    {routes.map((route) => (
                        <NavRoute key={route.name} to={route.link}>{route.name}</NavRoute>
                    ))}
                    <LoginButton>Sign In</LoginButton>
                </NavRoutes>
            </RightNav>
        </NavContainer>
    </SNavbar>
  )
}

export default Navbar

const SNavbar = styled.nav`
    background-color: #4fc7f6;
`;

const NavContainer = styled.div`
    align-items: center;
    color: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1300px;
`;

const SNavbarBrand = styled.div`
    font-size: 3rem;
`;

const RightNav = styled.div``;
const NavRoutes = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 2rem;
    align-items: center;
    cursor: pointer;
`;

const NavRoute = styled(Link)`
    padding: 0.5rem 1rem;
    color: white;
    transition: 0.5s ease;
    text-decoration: none;
    &:hover {
        box-shadow: 0px 0px 10px white;
        color: black;
        background-color: white;
        transition: 0.5s ease;
    }
`;

const LoginButton = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 3rem;
    padding: 0.7rem 3rem;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
        border: 1px solid transparent;
        box-shadow: 0px 0px 10px yellow;
        background-color: yellow;
        transition: 0.3s ease;
    }
`;
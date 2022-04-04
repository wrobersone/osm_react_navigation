import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Menu from './Menu'

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
        <NavContainer>
            <DrawerButton onClick={toggleDrawer}>
                <FaBars />
            </DrawerButton>
            <SNavbarBrand>LOGO</SNavbarBrand>
            <RightNav>
                <NavRoutes>
                    {routes.map((route) => {
                        if (route.subRoutes) {
                            return <Menu route={route} key={route.name} />
                        }
                        return (
                            <NavRoute key={route.name} to={route.link}>{route.name}</NavRoute> 
                        )
                    })}
                </NavRoutes>
                    <LoginButton>Sign In</LoginButton>
            </RightNav>
        </NavContainer>
    </SNavbar>
  )
}

export default Navbar

const DrawerButton = styled.button`
    all: unset;
    font-size: 3rem;
    display: grid;

    @media (min-width: 768px) {
        display: none;
    }
`;

const SNavbar = styled.nav`
    background-color: #4fc7f6;
`;

const NavContainer = styled.div`
    padding: 1rem;
    align-items: center;
    color: white;
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1300px;
`;

const SNavbarBrand = styled.div`
    font-size: 3rem;
`;

const RightNav = styled.div`
    display: flex;
    gap: 2rem;
`;


const NavRoutes = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
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
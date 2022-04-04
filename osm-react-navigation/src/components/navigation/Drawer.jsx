import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
        {isOpen && <Backdrop onClick={toggleDrawer} />}
        <SDrawer isOpen={isOpen}>
            <RightNav>
            <SNavbarBrand>LOGO</SNavbarBrand>
                <NavRoutes onClick={toggleDrawer}>
                    {routes.map((route) => (
                        <NavRoute key={route.name} to={route.link}>{route.name}</NavRoute>
                    ))}
                </NavRoutes>
                <LoginButton>Sign In</LoginButton>
            </RightNav>
        </SDrawer>
    </>
  )
}

export default Drawer

const SNavbarBrand = styled.h2`
    font-size: 3rem;
`;

const SDrawer = styled.div`
    z-index: 150;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 60%;
    background-color: white;
    
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    background-color: rgba(0, 0, 0, 0.2);
`;

const RightNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
`;


const NavRoutes = styled.div`
    
`;

const NavRoute = styled(Link)`
    display: flex;
    color: black;
    text-decoration: none;
    font-size: 2.5rem;
    padding: 0.5rem;
`;

const LoginButton = styled.button`
    background-color: white;
    border: 1px solid black;
    border-radius: 3rem;
    padding: 0.7rem 3rem;
    transition: 0.3s ease;
    cursor: pointer;
    align-self: flex-start;

    &:hover {
        border: 1px solid transparent;
        box-shadow: 0px 0px 10px yellow;
        background-color: yellow;
        transition: 0.3s ease;
    }
`;
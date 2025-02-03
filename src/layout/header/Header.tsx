import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';

const items = ["Home", "Skills", "Works", "Tetimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>            
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-between;
`
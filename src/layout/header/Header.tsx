import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "Skills", "Works", "Tetimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
                       
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
    background-color: #d4ffd3;
`
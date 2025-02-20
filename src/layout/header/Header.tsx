import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { DesktopMenu } from './desktopMenu/DesktopMenu';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { S } from './Header_Styles';

const items = ["Home", "Skills", "Works", "Tetimony", "Contact"]

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
                       
        </S.Header>
    );
};

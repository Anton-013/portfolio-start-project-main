import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "../skills/Skills_Styles";

export { };

export const Testimony: React.FC = () => {
    return (
        <StyledTetimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"} />
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTetimony>
    );
};

const StyledTetimony = styled.section`
    background-color: blue;
    min-height: 50vh;
    position: relative;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`

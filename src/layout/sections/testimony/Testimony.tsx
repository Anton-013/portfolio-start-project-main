import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";
import { Container } from "../../../components/Container";

export { };

export const Testimony = () => {
    return (
        <StyledTetimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote"} />
                    </IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTetimony>
    );
};

const StyledTetimony = styled.section`
    background-color: blue;
    min-height: 50vh;

    ${IconWrapper} {
        margin: 28px 0 72px;
    }
`

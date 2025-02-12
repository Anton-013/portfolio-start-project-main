import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export { };

export const Testimony = () => {
    return (
        <StyledTetimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={"quote"} />
                </IconWrapper>
                <Slider />
            </FlexWrapper>

        </StyledTetimony>
    );
};

const StyledTetimony = styled.section`
    background-color: blue;
    min-height: 50vh;

    ${IconWrapper} {
        margin: 42px 0 72px;
    }
`

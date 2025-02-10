import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am Svetlana Dyablo</Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
        
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const Name = styled.h2`
    font-family: "Jisefin Sans", sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`
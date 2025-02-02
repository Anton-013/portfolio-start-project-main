import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <div>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyablo</h2>
                    <h1>A Web Developer. </h1>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
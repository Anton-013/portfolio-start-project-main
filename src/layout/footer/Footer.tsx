import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export {};

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Svetlana</Name>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialList>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                    </SocialLink>
                </SocialItem>

                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem>

                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: orange;
    min-height: 20vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Copyright = styled.small`

`

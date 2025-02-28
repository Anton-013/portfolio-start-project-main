import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

export { }

const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "css",
        title: "CSS3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "react",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "typescript",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "styled",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "figma",
        title: "WEB DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    <Fade cascade damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill
                                iconId={s.iconId}
                                title={s.title}
                                description={s.description}
                                key={index} />
                        })}
                    </Fade>

                </FlexWrapper>
            </Container>

        </S.Skills>
    );
};



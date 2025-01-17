import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiMegaphoneLine } from "react-icons/ri";
import { FaPeopleGroup, FaWandMagicSparkles } from "react-icons/fa6";
import { StyledSection, Content, Title, Wrapper, Tile, IconWrapper, TileTitle, TileText } from "./styled";

const FeaturesSection = () => (
    <StyledSection id="features">
        <Content>
            <Title>Features</Title>
            <Wrapper>
                <Tile>
                    <IconWrapper><IoChatbubbleEllipsesOutline /></IconWrapper>
                    <TileTitle>Lorem Ipsum</TileTitle>
                    <TileText>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesqu natoque etiam.</TileText>
                </Tile>
                <Tile>
                    <IconWrapper><RiMegaphoneLine /></IconWrapper>
                    <TileTitle>Lorem Ipsum</TileTitle>
                    <TileText>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesqu natoque etiam.</TileText>
                </Tile>
                <Tile>
                    <IconWrapper><FaPeopleGroup /></IconWrapper>
                    <TileTitle>Lorem Ipsum</TileTitle>
                    <TileText>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesqu natoque etiam.</TileText>
                </Tile>
                <Tile>
                    <IconWrapper><FaWandMagicSparkles /></IconWrapper>
                    <TileTitle>Lorem Ipsum</TileTitle>
                    <TileText>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesqu natoque etiam.</TileText>
                </Tile>
            </Wrapper>
        </Content>
    </StyledSection>
);

export default FeaturesSection;
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiMegaphoneLine } from "react-icons/ri";
import { FaPeopleGroup, FaWandMagicSparkles } from "react-icons/fa6";
import { Content } from "../../common/Content/styled";
import { Wrapper, Tile, IconWrapper, TileTitle, TileText } from "../StyledTile/styled";
import { StyledSection, Title } from "./styled";

const FeaturesSection = () => (
    <StyledSection id="features">
        <Content>
            <Title>Features</Title>
            <Wrapper>
                <Tile>
                    <IconWrapper><IoChatbubbleEllipsesOutline /></IconWrapper>
                    <TileTitle>Seamless Communication</TileTitle>
                    <TileText>Connect easily with tools for clear and effective messaging anytime, anywhere.</TileText>
                </Tile>
                <Tile>
                    <IconWrapper><RiMegaphoneLine /></IconWrapper>
                    <TileTitle>Powerful Marketing</TileTitle>
                    <TileText>Reach your audience with targeted campaigns that drive engagement and growth.</TileText>
                </Tile>
                <Tile>
                    <IconWrapper><FaPeopleGroup /></IconWrapper>
                    <TileTitle>Team Collaboration</TileTitle>
                    <TileText>Foster productivity with shared workspaces, real-time updates, and smooth teamwork.</TileText>
                </Tile>
                <Tile>
                    <IconWrapper><FaWandMagicSparkles /></IconWrapper>
                    <TileTitle>Innovative Solutions</TileTitle>
                    <TileText>Discover cutting-edge technologies tailored to solve complex business challenges.</TileText>
                </Tile>
            </Wrapper>
        </Content>
    </StyledSection>
);

export default FeaturesSection;
import { FaCloudArrowDown, FaCode } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { IoLogoBuffer } from "react-icons/io";
import { StyledSection, Wrapper, SectionHeader, SectionText } from "./styled";
import { Content } from "../../common/Content/styled";
import { Tile, IconWrapper, TileTitle, TileText } from "../StyledTile/styled";

const OurServicesSection = () => (
    <StyledSection id="services">
        <Content>
            <SectionHeader>Our services</SectionHeader>
            <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</SectionText>
            <Wrapper>
                <Tile $white>
                    <IconWrapper><FaCode /></IconWrapper>
                    <TileTitle>Seamless Communication</TileTitle>
                    <TileText $white>Connect easily with tools for clear and effective messaging anytime, anywhere.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><FaShoppingCart /></IconWrapper>
                    <TileTitle>Powerful Marketing</TileTitle>
                    <TileText $white>Reach your audience with targeted campaigns that drive engagement and growth.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><FaCloudArrowDown /></IconWrapper>
                    <TileTitle>Team Collaboration</TileTitle>
                    <TileText $white>Foster productivity with shared workspaces, real-time updates, and smooth teamwork.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><IoLogoBuffer /></IconWrapper>
                    <TileTitle>Innovative Solutions</TileTitle>
                    <TileText $white>Discover cutting-edge technologies tailored to solve complex business challenges.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><BiSolidPlaneAlt /></IconWrapper>
                    <TileTitle>Innovative Solutions</TileTitle>
                    <TileText $white>Discover cutting-edge technologies tailored to solve complex business challenges.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><ImStatsDots /></IconWrapper>
                    <TileTitle>Innovative Solutions</TileTitle>
                    <TileText $white>Discover cutting-edge technologies tailored to solve complex business challenges.</TileText>
                </Tile>
            </Wrapper>
        </Content>
    </StyledSection>
);

export default OurServicesSection;
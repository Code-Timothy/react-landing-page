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
                    <TileTitle>Custom Development</TileTitle>
                    <TileText $white>We create tailored software solutions that perfectly meet your unique requirements.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><FaShoppingCart /></IconWrapper>
                    <TileTitle>E-Commerce</TileTitle>
                    <TileText $white>Scale your online business with our dynamic and user-friendly e-commerce platforms.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><FaCloudArrowDown /></IconWrapper>
                    <TileTitle>Cloud Backup</TileTitle>
                    <TileText $white>Foster productivity with shared workspaces, real-time updates, and smooth teamwork.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><IoLogoBuffer /></IconWrapper>
                    <TileTitle>Creative Design</TileTitle>
                    <TileText $white>Our innovative visual designs will make your brand stand out from the competition.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><BiSolidPlaneAlt /></IconWrapper>
                    <TileTitle>Fast Delivery</TileTitle>
                    <TileText $white>We deliver swiftly and efficiently to meet the expectations of your clients and partners.</TileText>
                </Tile>
                <Tile $white>
                    <IconWrapper><ImStatsDots /></IconWrapper>
                    <TileTitle>Advanced Analytics</TileTitle>
                    <TileText $white>Gain deep insights and analyze key metrics to support your company’s growth.</TileText>
                </Tile>
            </Wrapper>
        </Content>
    </StyledSection>
);

export default OurServicesSection;
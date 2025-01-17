import { FaCheck } from "react-icons/fa";
import { StyledSection, ImageWrapper, Image, Header, Text, Title, List, Marker, Item } from "./styled";
import aboutSectionImage from "../../assets/aboutSectionImage.jpg";

const AboutSection = () => (
    <StyledSection id="about">
        <ImageWrapper>
            <Image src={aboutSectionImage} />
        </ImageWrapper>
        <div>
            <Header>About Us</Header>
            <Text>
                Our company is dedicated to delivering innovative solutions,
                ensuring exceptional quality, and driving sustainable growth.
                With a focus on customer satisfaction, we work tirelessly to exceed expectations,
                providing reliable, efficient, and tailored services that empower businesses to thrive.
                Our commitment to excellence, coupled with a passionate team of experts,
                makes us a trusted partner in achieving success.
            </Text>
            <Title>Why Choose Us?</Title>
            <List>
                <Item><Marker><FaCheck size={10} /></Marker>Exceptional Quality</Item>
                <Item><Marker><FaCheck size={10} /></Marker>Trusted Expertise</Item>
                <Item><Marker><FaCheck size={10} /></Marker>Customer-Centric</Item>
                <Item><Marker><FaCheck size={10} /></Marker>Innovative Solutions</Item>
                <Item><Marker><FaCheck size={10} /></Marker>Affordable Prices</Item>
                <Item><Marker><FaCheck size={10} /></Marker>24/7 Support</Item>
                <Item><Marker><FaCheck size={10} /></Marker>Eco-Friendly Practices</Item>
                <Item><Marker><FaCheck size={10} /></Marker>Proven Track Record</Item>
            </List>
        </div>
    </StyledSection>
);

export default AboutSection;
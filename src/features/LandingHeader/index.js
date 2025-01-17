import { useState, useEffect } from "react";
import { Container, VideoBackground, Wrapper, Title, Text, Button } from "./styled";
import landingHeaderVideo from "../../assets/landingHeaderVideo.mp4";

const LandingHeader = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <VideoBackground autoPlay muted>
                <source src={landingHeaderVideo} type="video/mp4" />
            </VideoBackground>
            <Wrapper isVisible={showContent}>
                <Title>Empower your <br />brand online</Title>
                <Text>
                    Create a powerful online presence with tools designed
                    to boost your brand visibility and engagement.
                    Connect with your audience like never before.
                </Text>
            </Wrapper>
            <Button isVisible={showContent}>Learn more</Button>
        </Container>
    );
};

export default LandingHeader;
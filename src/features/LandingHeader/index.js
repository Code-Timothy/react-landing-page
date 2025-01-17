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
                <Title>We are a<br />landing page</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                </Text>
            </Wrapper>
            <Button isVisible={showContent}>Learn more</Button>
        </Container>
    );
};

export default LandingHeader;
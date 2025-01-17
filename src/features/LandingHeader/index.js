import { Container, VideoBackground, Wrapper, Title, Text, Button } from "./styled";
import landingHeaderVideo from "../../assets/landingHeaderVideo.mp4";

const LandingHeader = () => (
    <Container>
        <VideoBackground autoPlay muted>
            <source src={landingHeaderVideo} type="video/mp4" />
        </VideoBackground>
        <Wrapper>
            <Title>We are a <br /> landing page</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
            </Text>
        </Wrapper>
        <Button>Learn more</Button>
    </Container>
);

export default LandingHeader;
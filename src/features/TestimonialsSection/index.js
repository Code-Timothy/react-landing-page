import clientPhoto1 from "../../assets/client1.jpg";
import clientPhoto2 from "../../assets/client2.jpg";
import clientPhoto3 from "../../assets/client3.jpg";
import clientPhoto4 from "../../assets/client4.jpg";
import clientPhoto5 from "../../assets/client5.jpg";
import clientPhoto6 from "../../assets/client6.jpg";
import { Content } from "../../common/Content/styled";
import {
    StyledSection,
    SectionHeader,
    Image,
    TestimonialsContainer,
    TestimonialTile,
    Rate,
    Author,
} from "./styled";

const TestimonialsSection = () => (
    <StyledSection id="testimonials">
        <Content>
            <SectionHeader>What our clients say</SectionHeader>
            <TestimonialsContainer>
                <TestimonialTile>
                    <Image src={clientPhoto1} />
                    <div>
                        <Rate>
                            ""Great experience with this company!
                            The team was incredibly helpful and responsive.
                            Would definitely recommend their services. 😊""
                        </Rate>
                        <Author>- James Smith</Author>
                    </div>
                </TestimonialTile>
                <TestimonialTile>
                    <Image src={clientPhoto2} />
                    <div>
                        <Rate>
                            ""I'm really impressed with the quality of service provided.
                            Fast, efficient, and always professional.
                            Would use them again for sure!""
                        </Rate>
                        <Author>- William Davis</Author>
                    </div>
                </TestimonialTile>
                <TestimonialTile>
                    <Image src={clientPhoto3} />
                    <div>
                        <Rate>
                            ""Fantastic service! From start to finish,
                            everything was handled smoothly and efficiently.
                            Very happy with the results. Highly recommend!""
                        </Rate>
                        <Author>- Benjamin Wilson</Author>
                    </div>
                </TestimonialTile>
                <TestimonialTile>
                    <Image src={clientPhoto4} />
                    <div>
                        <Rate>
                            ""Very satisfied with the work done. The team was professional,
                            the project was completed on time,
                            and communication was clear throughout. 👍""
                        </Rate>
                        <Author>- Emily Johnson</Author>
                    </div>
                </TestimonialTile>
                <TestimonialTile>
                    <Image src={clientPhoto5} />
                    <div>
                        <Rate>
                            ""Exceptional service! The team went above and beyond
                            to ensure everything was perfect.
                            Definitely a company I would trust again.""
                        </Rate>
                        <Author>- Marcel Smith</Author>
                    </div>
                </TestimonialTile>
                <TestimonialTile>
                    <Image src={clientPhoto6} />
                    <div>
                        <Rate>
                            ""I had a wonderful experience working with them.
                            Their attention to detail and customer service was outstanding.
                            Will be returning for sure! 😁""
                        </Rate>
                        <Author>- Olivia Brown</Author>
                    </div>
                </TestimonialTile>
            </TestimonialsContainer>
        </Content>
    </StyledSection>
);

export default TestimonialsSection;
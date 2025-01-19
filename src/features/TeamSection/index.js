import teammatePhoto1 from "../../assets/teammate1.jpg";
import teammatePhoto2 from "../../assets/teammate2.jpg";
import teammatePhoto3 from "../../assets/teammate3.jpg";
import teammatePhoto4 from "../../assets/teammate4.jpg";
import {
    StyledSection,
    SectionHeader,
    SectionText,
    TeamContainer,
    Teammate,
    Image,
    Name,
    Profession,
} from "./styled";

const TeamSection = () => (
    <StyledSection id="team">
        <SectionHeader>Meet the team</SectionHeader>
        <SectionText>
            Meet our dedicated team, passionate about delivering
            the best solutions and creating success together.
        </SectionText>
        <TeamContainer>
            <Teammate>
                <Image src={teammatePhoto1} alt="Teammate photo" />
                <Name>James Smith</Name>
                <Profession>Director</Profession>
            </Teammate>
            <Teammate>
                <Image src={teammatePhoto2} alt="Teammate photo" />
                <Name>William Davis</Name>
                <Profession>Senior Designer</Profession>
            </Teammate>
            <Teammate>
                <Image src={teammatePhoto3} alt="Teammate photo" />
                <Name>Emily Johnson</Name>
                <Profession>Senior Frontend Developer</Profession>
            </Teammate>
            <Teammate>
                <Image src={teammatePhoto4} alt="Teammate photo" />
                <Name>Olivia Brown</Name>
                <Profession>Project Manager</Profession>
            </Teammate>
        </TeamContainer>
    </StyledSection>
);

export default TeamSection;
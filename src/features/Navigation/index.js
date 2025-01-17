import { StyledNavigation, Header, LinksList, Link } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <Header>REACT LANDING PAGE</Header>
        <LinksList>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#team">Team</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </LinksList>
    </StyledNavigation>
);

export default Navigation;
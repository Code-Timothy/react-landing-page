import { StyledNavigation, Header, LinksList, Link } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <Header>REACT LANDING PAGE</Header>
        <LinksList>
            <li><Link>Features</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>Gallery</Link></li>
            <li><Link>Testimonials</Link></li>
            <li><Link>Team</Link></li>
            <li><Link>Contact</Link></li>
        </LinksList>
    </StyledNavigation>
);

export default Navigation;
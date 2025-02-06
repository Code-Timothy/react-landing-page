import { Link, StyledFooter } from "./styled";

const Footer = () => (
    <StyledFooter>
        <p>© 2025 All rights reserved. Design by
            <Link
                href="https://github.com/Code-Timothy"
                target="_blank"
                rel="noreferrer noopener"
            >
                {" "}Code-Timothy
            </Link>
        </p>
    </StyledFooter>
);

export default Footer;
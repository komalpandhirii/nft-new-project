import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavLinkCustom() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink  to={'/'}
        className={(isActive) => isActive.isActive ? 'activeClassName navLink':'navLink'}>Home</NavLink>

        <NavLink  to={'/nft'}
        className={(isActive) => isActive.isActive ? 'activeClassName navLink':'navLink'}>NFT Market</NavLink>

        <NavLink  to={'/feature'}
        className={(isActive) => isActive.isActive ? 'activeClassName navLink':'navLink'}>Features</NavLink>

        <NavLink  to={'/collectors'}
        className={(isActive) => isActive.isActive ? 'activeClassName navLink':'navLink'}>Collectors</NavLink>

        <NavLink  to={'/about'}
        className={(isActive) => isActive.isActive ? 'activeClassName navLink':'navLink'}>About Us</NavLink>
      </Container>
    </Navbar>
  );
}

export default NavLinkCustom;
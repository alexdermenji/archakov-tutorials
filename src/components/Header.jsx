import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <h2>
        <NavLink to='/'>React Blog</NavLink>
      </h2>
      <Nav variant='pills' defaultActiveKey='/'>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey='/' to='/'>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey='/about' to='/about'>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey='/home' to='/profile'>
            Профиль
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;

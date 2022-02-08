import './Header.css'
import Nav from './Nav/Nav';

const Header = ({ setSelectedNav }) => {
  return (
    <header className="header">
      <span className="name">Carter Morgan</span>
      <Nav
        setSelectedNav={setSelectedNav}>
      </Nav>
    </header>
  )
}

export default Header;
import './Nav.scss';

const Nav = ({ setSelectedNav }) => {
  return (
    <div className="nav-content">
      <ul>
        <li onClick={() => setSelectedNav('about')}>About</li>
        <li onClick={() => setSelectedNav('resume')}>Resume</li>
        <li onClick={() => setSelectedNav('portfolio')}>Portfolio</li>
        <li onClick={() => setSelectedNav('contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Nav;
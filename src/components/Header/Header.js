import './Header.css';
import logo from '../../media/logo.png';

function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo}/>
      <ul className="menu">
        <li>Menu</li>
        <li>{'Hours & Location'}</li>
        <li>Our Story</li>
        <li>Catering</li>
      </ul>
    </div>
  );
}

export default Header;

import './Header.css';
import logo from '../../media/logo.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className="leftHeader">
        <img className="logo" alt="logo" src={logo}/>
        <ul className="menu">
          <Link className="menuLink">Menu</Link>
          <Link className="menuLink">{'Hours & Location'}</Link>
          <Link className="menuLink">Our Story</Link>
          <Link className="menuLink">Catering</Link>
        </ul>
      </div>
      <div className="rightHeader">
        <h1 className="headerButton">Order Delivery</h1>
        {/* <h1 className="headerButton">Reserve Table</h1> */}
      </div>
    </div>
  );
}

export default Header;

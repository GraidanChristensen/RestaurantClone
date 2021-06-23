import './Header.css';
import logo from '../../media/logo.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div className="leftHeader">
        <Link to='/'><img className="logo" alt="logo" src={logo}/></Link>
        <ul className="menu">
          <Link to='Menu' className="menuLink">Menu</Link>
          <Link to='Hours' className="menuLink">{'Hours & Location'}</Link>
          <Link to='Story' className="menuLink">Our Story</Link>
          <Link to='Catering' className="menuLink">Catering</Link>
        </ul>
      </div>
      <div className="rightHeader">
        <Link to ='Order' className="headerButton">Order Delivery</Link>
      </div>
    </div>
  );
}

export default Header;

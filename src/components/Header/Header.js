import './Header.css';
import logo from '../../media/logo.png';

function Header() {
  return (
    <div className="Header">
      <div className="leftHeader">
        <img className="logo" alt="logo" src={logo}/>
        <ul className="menu">
          <li>Menu</li>
          <li>{'Hours & Location'}</li>
          <li>Our Story</li>
          <li>Catering</li>
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

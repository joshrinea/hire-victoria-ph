import { Menus } from "../utils/contants/constants";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          {/* <h1 className="sitename">Logo.</h1> */}
          <img src={Logo} alt="" />
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            {Menus.map((menu, index) => (
              <li key={index}>
                <a href={menu.route}>{menu.link}</a>
              </li>
            ))}
            {/* <li>
              <a href="" className="active">
                home
              </a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">features</a>
            </li>
            <li>
              <a href="">services</a>
            </li>
            <li>
              <a href="">contact</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

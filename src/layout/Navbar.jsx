import { Menus } from "../utils/contants/constants";
import Logo from "../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll, true);

  return (
    <header id="header" className={`header d-flex align-items center fixed-top ${isScrolled ? "nav-scrolled" : ""}`}>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

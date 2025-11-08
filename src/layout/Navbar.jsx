const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items center fixed-top">
      <div
        className="container-fluid container-xl position-relative d-flex align-items-center"
        style={{ backgroundColor: "red" }}
      >
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Logo.</h1>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

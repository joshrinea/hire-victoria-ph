import useMailHook from "../hooks/useMailHook";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Hire Victoria</span>
            </a>
            <div className="footer-contact pt-3">
              <p>
                La Elle Business Holdings Incorporate Office, San Martin,
                Bacnotan, La Union, 2515
              </p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+6393-22449-897</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span onClick={useMailHook} className="footer-email">
                  support@hirevictoria-ph.com
                </span>
              </p>
            </div>

            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#services">Fractional Services</a>
              </li>
              <li>
                <a href="#services">Hire Your Own</a>
              </li>
              <li>
                <a href="#services">Shorterm-Rental Bookkeeping</a>
              </li>
            </ul>
          </div>

          {/* <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your subscription request has been sent. Thank you!
              </div>
            </form>
          </div> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

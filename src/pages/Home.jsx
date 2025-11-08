import { useEffect } from "react";
import HeroBackground from "../assets/images/hero.webp";
import Model from "../assets/images/model.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { Clients } from "../static/data/clients";
import AboutCompany1 from "../assets/images/about-company-1.jpg";
import AboutCompany2 from "../assets/images/about-company-2.jpg";
import AboutCompany3 from "../assets/images/about-company-3.jpg";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section id="hero" className="hero section">
        <div className="hero-bg">
          <img src={HeroBackground} alt="" />
        </div>
        <div className="container text-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>
              Simplify Your Airbnb Finances with <span>Victoria</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              We offer subscription-based bookkeeping built for simplicity and
              scale—covering reconciliations, expense tracking, monthly P&Ls,
              owner statements, and year-end reports.
              <br />
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">
                Hire Victoria
              </a>
              <a
                href="#"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
            <img
              src={Model}
              className="img-fluid hero-img"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>
        </div>
      </section>

      {/* featured services section */}
      <section
        id="featured-services"
        className="featured-services section light-background"
      >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Fractional Services
                    </a>
                  </h4>
                  <p className="description">
                    Perfect for growing businesses needing part-time financial
                    leadership.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Shorterm-Rental Bookkeeping
                    </a>
                  </h4>
                  <p className="description">
                    Perfect for growing businesses needing part-time financial
                    leadership.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Hire Your Own
                    </a>
                  </h4>
                  <p className="description">
                    Build your own dedicated virtual accounting team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of  featured services section */}

      {/* about us section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="who-we-are">Who We Are</p>
              <h3>Built for Hosts & Rental Pros</h3>
              <p className="fst-italic">
                Hire Victoria is the go-to accounting team for short-term and
                mid-term rental businesses. From single-unit hosts to operators
                managing 100+ listings, we handle the numbers so you can focus
                on bookings and growth.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Gain Financial Clarity</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Save Time & Money</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Expert Trust Accounting</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Starting at $59/month</span>
                </li>
              </ul>
              <a href="#" className="read-more">
                <span>Book a Consultant</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div
              className="col-lg-6 about-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img src={AboutCompany1} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img src={AboutCompany2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-12">
                      <img src={AboutCompany3} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of about us section */}

      {/* clients section */}
      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {Clients.map((client, index) => (
              <div className="col-xl-3 col-md-6 col-6 client-logo" key={index}>
                <img
                  src={client.logo}
                  className="img-fluid"
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end of clients section */}

      {/* services section */}
      <section id="services" className="services section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>
            Hire Victoria offers following professional services to meet your
            needs.
          </p>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item item-cyan position-relative">
                <div className="d-flex align-items-center justify-content-start">
                  <i className="bi bi-percent icon"></i>
                  <div>
                    <h3>Fractional</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul>
                    <li>
                      <span>CFO</span>
                    </li>
                    <li>
                      <span>Services</span>
                    </li>
                    <li>
                      <span>Financial</span>
                    </li>
                    <li>
                      <span>Controllership</span>
                    </li>
                    <li>
                      <span>Services</span>
                    </li>
                    <li>
                      <span>Bookkeeping</span>
                    </li>
                    <li>
                      <span>Taxation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item item-teal position-relative">
                <div className="d-flex align-items-center justify-content-start">
                  <i className="bi bi-card-list icon"></i>
                  <div>
                    <h3>Hire Your Own</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul>
                    <li>
                      <span>Accountant</span>
                    </li>
                    <li>
                      <span>Bookkeeper</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item item-indigo position-relative">
                <div className="d-flex align-items-center justify-content-start">
                  <i class="bi bi-calendar4-week icon"></i>
                  <div>
                    <h3>Shorterm-Rental Bookkeeping</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul>
                    <li>
                      <span>Property Management</span>
                    </li>
                    <li>
                      <span>Rent Arbitrage</span>
                    </li>
                    <li>
                      <span>Owned Properties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Get in touch with our team and take the first step toward
            stress-free finances
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>New York, NY</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+1 2345 67899 55</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>support@hirevictoriaph.com</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  width: "100%",
                  height: "410px",
                }}
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form
                action="#"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="message"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit" onClick="showToast()">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

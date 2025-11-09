import HeroBackground from "../assets/images/hero.webp";
import Model from "../assets/images/model.webp";
import { Clients } from "../static/data/clients";
import AboutCompany1 from "../assets/images/about-company-1.jpg";
import AboutCompany2 from "../assets/images/about-company-2.jpg";
import AboutCompany3 from "../assets/images/about-company-3.jpg";
import { Testimonials } from "../static/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Faqs } from "../static/data/faq";
import { useState } from "react";
import useMailHook from "../hooks/useMailHook";

const Home = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const handleClick = (id) => {
    if (id === activeFaqIndex) {
      setActiveFaqIndex(-1);
    } else {
      setActiveFaqIndex(id);
    }
  };

  return (
    <>
      {/* hero section */}
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
              {/* <a
                href="#"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a> */}
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
      {/* end of hero section */}

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
                      CFO Services
                    </a>
                  </h4>
                  <p className="description">
                    Access expert CFOs who guide strategy, optimize finances,
                    and drive sustainable growth.
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
                    We deliver accurate bookkeeping for short-term rentals and
                    property management businesses.
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
                      Hire Your Own Accountant
                    </a>
                  </h4>
                  <p className="description">
                    Get a dedicated accountant or bookkeeper for 4–8 hours
                    daily, offering expertise and flexibility without the
                    overhead.
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
              {/* <p className="who-we-are">Who We Are</p>
              <h3>Built for Hosts & Rental Pros</h3> */}
              <h3>Who We Are</h3>
              <p className="fw-light">
                We are a dynamic financial agency offering a wide range of
                services, including bookkeeping, accounting, global recruitment,
                and fractional finance solutions. Our clients span across
                diverse industries such as e-commerce, digital currency, SaaS,
                short-term rentals, property management, retail, construction,
                and more. At our core, we believe effective accounting should be
                Fast, Accurate, and Understandable — empowering our clients to
                make confident financial decisions with clarity and efficiency.
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
                  <span>Starting at $50 per property</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/elle-cpa-msac"
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                <span>Book a meeting</span>
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
                    <h3>Fractional Services</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul>
                    <li>
                      <span><b>CFO</b> - Gain access to world-class financial leadership. Our experienced CFOs with global expertise will help guide your strategy, optimize your finances, and drive sustainable growth. Let’s scale your business together.</span>
                    </li>
                    <li>
                      <span><b>Financial Controllership Services</b> - Take control of your cash flow. We’ll help you with financial forecasting, bill payments, and overall financial management so you can focus on growing your business with confidence.</span>
                    </li>
                    <li>
                      <span><b>Bookkeeping Services</b> - Keep your books accurate, organized, and up to date. Whether you need a full cleanup or ongoing maintenance, our team ensures your records are precise and compliant.</span>
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
                    <h3>Hire Your Own Accountant</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul>
                    <li>
                      <span>Need a dedicated professional to handle your finances daily? We can provide you with an experienced accountant or bookkeeper who will work 4–8 hours a day exclusively for your business. Get the flexibility and expertise you need — without the overhead.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item item-indigo position-relative">
                <div className="d-flex align-items-center justify-content-start">
                  <i className="bi bi-calendar4-week icon"></i>
                  <div>
                    <h3>Shor-Term Rental Bookkeeping</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul>
                    <li>
                      <span>Own a property? Manage rentals? Do rent arbitrage? We specialize in bookkeeping for short-term rentals and property management businesses. Our skilled accountants ensure your books are accurate and up to date — so you always know how your properties are performing.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section id="faq" className="faq section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-container">
                {Faqs.map((faq, index) => (
                  <div
                    className={`faq-item ${
                      activeFaqIndex === index ? "faq-active" : ""
                    } `}
                    key={index}
                    onClick={() => handleClick(index)}
                  >
                    <h3>{faq.question}</h3>
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of faq section */}

      {/* testimonials section */}
      <section
        id="testimonials"
        className="section testimonials light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Don’t just take our word for it — hear from our satisfied clients!
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* <div class="swiper init-swiper">
            <div class="swiper-wrapper">
              {Testimonials.map((testimonial, index) => (
                <div class="swiper-slide" key={index}>
                  <div class="testimonial-item">
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <p>{testimonial.message}</p>
                    <div class="profile mt-auto">
                      <img
                        src={testimonial.image}
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
            }}
            className="swiper init-swiper"
          >
            <div className="swiper-config">
              <div className="swiper-wrapper">
                {Testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>{testimonial.message}</p>
                      <div className="profile mt-auto">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
      </section>
      {/* end of testimonials section */}

      {/* contact section */}
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
                <p>
                  La Elle Business Holdings Incorporate Office, San Martin,
                  Bacnotan, La Union, 2515
                </p>
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
                <p>+6393-22449-897</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay="400"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => useMailHook()}
              >
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>support@hirevictoria-ph.com</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8106750472207!2d121.07478087596805!3d14.552816685927903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8816d1f784d%3A0x9ebbb248bcd261c!2sThe%20Rochester%20San%20Joaquin%20Pasig%20Condominium%20By%3A%20Empire%20East!5e0!3m2!1sen!2sph!4v1762677509280!5m2!1sen!2sph"
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

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end of contact section */}
    </>
  );
};

export default Home;

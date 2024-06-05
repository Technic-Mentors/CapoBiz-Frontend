import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AlAhad from "../Assets/Images/Clients/client-alahadmarketing-logo.png";
import AlMahdia from "../Assets/Images/Clients/client-almahdia-logo.png";
import AlMakkah from "../Assets/Images/Clients/client-almakah-logo.png";
import Danish from "../Assets/Images/Clients/client-danish-groupco-logo.png";
import GetWell from "../Assets/Images/Clients/client-getwellpk-logo.png";
import LetTech from "../Assets/Images/Clients/client-lettechnologies-logo.png";
import Mobilfiksern from "../Assets/Images/Clients/client-mobilefiksers-logo.png";
import PunjabEstate from "../Assets/Images/Clients/client-punjabestate-logo.png";
import Sheikh from "../Assets/Images/Clients/client-sheikhlaw-logo.png";
import K2land from "../Assets/Images/Clients/K2Land-LOGO.png";
import RestaurantPOS from "../Assets/Images/restaurant-management-system.avif";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssessmentIcon from "@mui/icons-material/Assessment";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PeopleIcon from "@mui/icons-material/People";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import posIntro from '../Assets/Images/restaurant-pos-intro.avif'
import AOS from "aos";
import "aos/dist/aos.css";


function Restaurant() {

  useEffect(() => {
    AOS.init();
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="restaurant-header py-7">
        <div className="container">
          <div className="row g-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-header">
                <h6 className="subtitle mb-3">CapoBiz Restaurant Management</h6>
                <h2 className="main-heading text-light mb-4">
                  Enhancing Restaurant Efficiency And Service
                </h2>
              </div>
              <p className="text-light lead">
                Unlock the potential of your restaurant with CapoBiz's
                innovative management software, seamlessly blending culinary
                creativity with operational excellence.
              </p>
              <div className="head-buttons mt-5">
                <Link to="/Signup">
                  <button className="site-buttons text-light">
                    {" "}
                    Ask For A Demo <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={RestaurantPOS}
                alt=""
                className="img-fluid restaurant-pos"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="restaurant-pos-intro">
        <div className="restaurant-intro-overlay">
        <div className="container">
          <div className="row py-5 g-5">
            <div className="col-md-7" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-header">
                <h6 className="subtitle">
                Empowering Restaurants for Success
                </h6>
                <h2 className="main-heading">
                The Role of a Restaurant Management System
                </h2>
              </div>
              <p>A restaurant management system serves as the backbone of a successful restaurant business, offering a centralized platform to streamline operations and enhance efficiency. From managing reservations and orders to tracking inventory and analyzing sales data, a robust restaurant management system automates tedious tasks, improves decision-making, and ensures seamless operations.<br /><br /> By leveraging technology to optimize workflows and enhance customer experiences, a restaurant management system empowers restaurant owners to focus on delivering exceptional dining experiences and driving business growth.</p>
              <Link to='/contact'><button className="site-buttons">Grow Your Restaurant <span>&rarr;</span></button></Link>
            </div>

            <div className="col-md-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={posIntro} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      <div
        className="container clients"
        style={{ backgroundColor: "", minHeight: "200px" }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-10 col-12 py-7">
            <Slider {...settings}>
              <div>
                <img src={AlAhad} className="img-fluid" alt="pos-clients" />
              </div>
              <div>
                <img src={AlMahdia} className="img-fluid" alt="pos-clients" />
              </div>
              <div>
                <img src={AlMakkah} className="img-fluid" alt="pos-clients" />
              </div>

              <div>
                <img src={Danish} className="img-fluid" alt="pos-clients" />
              </div>
              <div>
                <img src={GetWell} className="img-fluid" alt="pos-clients" />
              </div>
              <div>
                <img src={LetTech} className="img-fluid" alt="pos-clients" />
              </div>
              <div>
                <img
                  src={Mobilfiksern}
                  className="img-fluid"
                  alt="pos-clients"
                />
              </div>
              <div>
                <img
                  src={PunjabEstate}
                  className="img-fluid"
                  alt="pos-clients"
                />
              </div>
              <div>
                <img src={Sheikh} className="img-fluid" alt="pos-clients" />
              </div>
              <div>
                <img src={K2land} className="img-fluid" alt="pos-clients" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <section
        className="features-of-restaurant-software py-5"
        style={{ backgroundColor: "#Fafafa" }}
      >
        <div className="container">
          <div className="section-header mb-5 text-center">
            <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">What Does this system offer?</h6>
            <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Special Features Of CapoBiz Restaurant Management System
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <OutdoorGrillIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Products & Production Management</h5>
                  <p>
                    CapoBiz restaurant management system helps you keep an eye
                    on the products and their used amount in different recipes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <ShowChartIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Stock Management</h5>
                  <p>
                    Be one step ahead! CapoBiz helps you preempt and maintain
                    the stock of your hottest recipes. With this feature, you
                    never go out-of-stock, nor do you face over-stocking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <ShoppingBasketIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Sales & Purchase Management</h5>
                  <p>
                    Sales and purchases are the most important aspect of your
                    restaurant. Keep track of your daily sold out food items and
                    purchased food items.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <CurrencyExchangeIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Accounts & Expenses Management</h5>
                  <p>
                    With CapoBiz, you have a completely transparent accounting
                    and expenses management system, be it employee or customer
                    accounts, or daily business expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <PeopleIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>People Management</h5>
                  <p>
                    Manage the record of your chefs and other working staff,
                    have complete record of everyone's performance, and create
                    multiple system users as your business requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <ReceiptLongIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Effortless Billing And Invoicing</h5>
                  <p>
                    CapoBiz streamlines billing and invoicing with seamless
                    precision, ensuring efficient transactions for your
                    restaurant.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <AssessmentIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5> Reporting And Analytics</h5>
                  <p>
                    CapoBiz offers comprehensive reporting capabilities,
                    providing valuable insights to optimize business
                    performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <AddToDriveIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Data Backup And Security</h5>
                  <p>
                    CapoBiz ensures peace of mind with complete data backup and
                    security, safeguarding your restaurant's valuable
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-features py-4">
        <div className="container">
          
          <div className="row d-flex justify-content-center">
          <div className="section-header text-center mb-4">
            <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">What's more??</h6>
            <h2 className="main-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200" >
              More Compelling Reasons To Have CapoBiz At Your Restaurant
            </h2>
            <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Discover More Compelling Reasons To Choose CapoBiz for Your Restaurant. Elevate your restaurant's performance with CapoBiz Restaurant Management System. From efficient table management to streamlined inventory tracking, CapoBiz offers a comprehensive solution to drive success in your restaurant business.</p>
          </div>
          
            <div className="col-md-5 more-feature-col-1" style={{backgroundColor: '#f8f8f8', padding: '14px', border: '0.5px solid #ccc'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                
                <ul style={{lineHeight: "2rem", listStyle: 'none', padding: '0', margin: '0'}}>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Table Management:</span> CapoBiz efficiently organizes seating arrangements and optimizes dining space utilization, ensuring seamless table turnover and enhanced customer satisfaction.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Menu & Recipe Management:</span> Elevate your culinary offerings with CapoBiz's comprehensive menu and recipe management features, empowering you to customize menus and standardize recipes effortlessly.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Order Management:</span> CapoBiz streamlines order processing with intuitive interfaces and automated workflows, ensuring accuracy and speed in every transaction for exceptional service delivery.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Inventory Management:</span> Take control of your inventory with CapoBiz's robust system, tracking stock levels and automating replenishment processes to optimize inventory and reduce costs.</li>
                </ul>
            
            </div>

            <div className="col-md-5 more-feature-col-2" style={{backgroundColor: '#f8f8f8', padding: '14px', border: '0.5px solid #ccc'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
            <ul style={{lineHeight: "2rem", listStyle: 'none', padding: '0', margin: '0'}}>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Kitchen Management:</span> CapoBiz enhances kitchen operations with streamlined workflows and real-time communication, minimizing wait times and ensuring timely food delivery for superior culinary experiences.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Customer Relationship Management:</span> Strengthen customer relationships with CapoBiz's integrated CRM features, capturing customer data and personalizing interactions to drive loyalty and repeat business.</li>
                    <li><CheckCircleOutlineIcon style={{color: 'var(--secondary-color)', fontSize: '20px'}} />&nbsp;<span style={{fontWeight: 'bold'}}>Delivery Management:</span> Simplify delivery management with CapoBiz's comprehensive system, optimizing delivery processes and providing real-time tracking for exceptional delivery experiences.</li>
                    
                </ul>
            </div>
          </div>
        </div>
      </section>
     
      <section className="restaurant-cta ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-header py-7 cta-rest text-light">
                <h6 className="subtitle">Spice Up Your Success</h6>
                <h2 className="stroke-heading">
                  Take Your Restaurant To <br /><span style={{fontSize: '220%' }}>New Heights</span><br /> With CapoBiz
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Restaurant;

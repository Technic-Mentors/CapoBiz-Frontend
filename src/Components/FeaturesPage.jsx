import { SupportAgent, Inventory2Outlined, Equalizer, ShoppingCartCheckout, Warehouse, Loyalty, CurrencyExchange, GroupAdd, VolunteerActivism, Paid, PieChart, PeopleAlt } from '@mui/icons-material';
import { css } from '@mui/styled-engine';
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import customFeatures from '../Assets/Images/pos-custom-features.avif'
import CTA from './CTA';

function FeaturesPage() {

  useEffect(() => {
    AOS.init();
  }, []);


  const Features = [
    {
      id: 1,
      icon: <Inventory2Outlined />,
      title: 'Inventory Management',
      description: 'Efficiently track and manage your stock levels with our comprehensive Inventory Management system.',
    },
    {
      id: 2,
      icon: <ShoppingCartCheckout />,
      title: 'Sales & Purchase Management',
      description: 'Streamline your transactions with our integrated Sales & Purchase Management tools.'
    },
    {
      id: 3,
      icon: <Warehouse />,
      title: 'Multi Warehouse Management',
      description: 'Easily oversee and control inventory across multiple locations with our Multi Warehouse Management feature.',
    },
    {
      id: 4,
      icon: <Loyalty />,
      title: 'Products & Production Management',
      description: 'Optimize your product lifecycle and production processes with our Products & Production Management system.',
    },
    {
      id: 5,
      icon: <CurrencyExchange />,
      title: 'Trading Management',
      description: 'Enhance your trading operations with our robust Trading Management capabilities.',
    },
    {
      id: 6,
      icon: <GroupAdd />,
      title: 'Accounts Management',
      description: 'Simplify your financial processes with our comprehensive Accounts Management system'},
    {
        id: 7,
        icon: <VolunteerActivism />,
        title: 'Customer Relationship Management',
        description: 'Build and maintain strong customer relationships with our intuitive Customer Relationship Management tools.',
      },
      {
        id: 8,
        icon: <Paid />,
        title: 'Salaries & Expense Management',
        description: 'Effortlessly handle payroll and expenses with our Salaries & Expense Management module, ensuring accurate and timely financial tracking.',
      },
      {
        id: 9,
        icon: <Equalizer />,
        title: 'Sales Forecasting',
        description: 'Anticipate market trends and make informed decisions with our powerful Sales Forecasting feature, providing valuable insights into future sales trends.',
      },
      {
        id: 10,
        icon: <PieChart />,
        title: 'Comprehensive Reporting',
        description: 'Gain deep insights into your business performance with our Comprehensive Reporting feature, offering detailed analysis and customizable reports for informed decision-making.',
      },
      {
        id: 11,
        icon: <PeopleAlt />,
        title: 'People Management',
        description: 'Efficiently manage your workforce with our People Management feature, facilitating tasks such as scheduling, attendance tracking, and employee performance evaluation.',
      },
      {
        id: 12,
        icon: <SupportAgent />,
        title: '24/7 Support',
        description: 'Receive round-the-clock assistance and guidance with our dedicated 24/7 Support feature, ensuring uninterrupted operation and peace of mind for your business.',
      },
      
  ];

  const [featuresData, setFeaturesData] = useState(Features);

  return (
    <div>
        <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Explore Our{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Features Showcase
                  </span>{" "}
                </h2>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="features-intro" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center features-description">
              <div className="features-content">
                <h6 className="subtitle">Feature Fusion</h6>
                <h2 className="main-heading">Features That Ease Up Your Life As A Business Owner</h2>
                <p>Immerse yourself in a world of unparalleled business efficiency with CapoBiz. Our feature-packed system is meticulously crafted to be your ally in navigating the dynamic landscape of commerce. Experience the ease of managing transactions, inventory, and customer interactions seamlessly. Stay steps ahead of your competitors as you leverage the power of CapoBiz to streamline operations, gain valuable insights, and provide an unmatched customer experience. Elevate your business, stand out, and thrive with the innovative features that redefine the essence of convenience for business owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className='container mt-5'>
          <div className='row d-flex  '>
            {featuresData.map((curElem) => {
              const { id, icon, title, description } = curElem;
              return (
                <div key={id} className='col-md-4 col-12 features-col mb-4 d-flex align-items-stretch' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <div className='card features-card '>
                    <div className='card-content '>
                     {React.cloneElement(icon, { style: { color: 'var(--secondary-color)', fontSize: '35px' }, className: 'features-icons' })}
                      <h2 className='mt-3'> {title}</h2>
                      <p>{description}</p>
                    </div>
                    </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="custom-features p-4" style={{backgroundColor: '#fafafa'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="custom mb-3 mt-4">
                <h6 className="subtitle">Need Custom Features?</h6>
                <h2 className="main-heading">Tailored Innovation: Your Business, Your Features</h2>
              </div>
              
              <p><p>Embrace tailored innovation with our point of sale software! Your business is unique, and so are its needs. Our system goes beyond the standard features, offering you the freedom to infuse custom functionalities that align perfectly with your operations. From specialized reporting tools to unique payment integrations, envision the features you need, and we'll bring them to life. This is your journey – let's customize success together!</p></p>
              <Link to='/contact'>
              <button className="site-buttons">Ask For Customization <span>&rarr;</span></button>
              </Link>
            </div>

            <div className="col-md-5 mt-4">
              <img src={customFeatures} alt="custom-pos-features" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      
    </div>
  );
}

export default FeaturesPage;

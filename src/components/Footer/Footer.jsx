import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerwidth flexCenter f-container">
        {/* left footer */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our viosion is to make sure that housing <br />
            challenge is curbed in Nigeria
          </span>
        </div>
        {/* right footer */}
        <div className="flexColStart f-right">
          <span className="primaryText">information from us</span>
          <span className="secondaryText"> Block 2554 Abuja Nigeria</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer

import React from 'react'
import './Header.css' 

const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className=" flexCenter paddings innerwidth h-container">
          <img className='ma' src="./logo.png" alt="logo" width={100} />

          <div className=" flexCenter h-menu">
            <a href="">Residencies</a>Our values<a href=""></a>Contact Us
            <a href="">Our Services</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header

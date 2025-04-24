import React from 'react'
import './Hero.css'
import CountUp from 'react-countup';



const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        <div className=" flexCStart hero-left">
          {/* left section  */}
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Discover <br /> good properties <br />
              from us
            </h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of property that suit you properly
            </span>
            <span className="secondaryText">
              Forget all difficulties of finding a residence contact us
            </span>
          </div>
          <div className=" flexCenter search-bar">
            <input type="text" />
            <button className="button-search">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Our customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={29} />
                <span>+</span>
              </span>

              <span className="secondaryText">Award winnigs</span>
            </div>
          </div>
        </div>

        {/* the right section of the Hero component */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero

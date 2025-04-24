import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Residencies.css";
import Data from "../../utils/slider.json";
import { SliderSettings } from "../SliderSettings";


const Residencies = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="r-wrapper">
      <div className="paddings innerwidth r-container">
        <div className="choiceDiv">
          {" "}
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <div className="nav-buttons">
            <button ref={prevRef} className="custom-prev">
              &lt;
            </button>
            <button ref={nextRef} className="custom-next">
              &gt;
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          grabCursor={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Connect swiper to buttons on init
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="r-swiper"
          {...SliderSettings}
        >
          {Data.map((card, i) => (
            <SwiperSlide className="hope" key={i}>
              <div className="r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span className="orangeText dolls-sign">$</span>
                  <span>{card.price}</span>
                </span>
                <h3 className="primaryText text-name">{card.name}</h3>
                <p className="primaryText text-details">{card.detail}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

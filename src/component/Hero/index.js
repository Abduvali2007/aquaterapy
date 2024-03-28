import React from "react";
import heroimg from "../../assets/Img/first-screen.png";
import herofoot from "../../assets/Img/hero-foot.png";
import herofo from "../../assets/Img/foot.png";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <img className="hero--img" src={heroimg} alt="img " />
          <div className="hero--nav">
            <div className="hero--nav__left"></div>
            <h1>Сеансы RitmStyle</h1>
            <div className="hero--nav__left--rigth"></div>
          </div>
          <div className="hero--footer">
            <img src={herofoot} alt="img" className="hero--footer__img1" />
            <div className="hero--footer__img2">
              <img src={herofo} alt="img" />
              <img src={herofo} alt="img" />
            </div>
            <div className="hero--footer__img3">
              <img src={herofo} alt="img" />
              <img src={herofo} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

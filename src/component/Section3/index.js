import React from "react";
import tion3 from "../../assets/Img/section3.png";

const Section3 = () => {
  return (
    <div id="section3">
      <div className="container">
        <div className="icons">
          <div className="div1"></div>
          <h1>Стоимость сеансов</h1>
          <div className="div2"></div>
        </div>
        <div className="section3">
          <div className="section3--text1">
            <h3>RitmStyle с погружением</h3>
            <h3>Абонемент на RitmStyle</h3>
            <h3>RitmStyle для пар</h3>
            <h3>RitmStyle для беременных</h3>
            <h3>RitmStyle + фотосессия</h3>
          </div>
          <div className="section3--text2">
            <h3>1000р.</h3>
            <h3>5500р.</h3>
            <h3>6000р.</h3>
            <h3>13500р.</h3>
            <h3>11500р..</h3>
          </div>
          <div className="section3--text3">
            <img src={tion3} alt="img" />
            <h2>Подарочный сертификат </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

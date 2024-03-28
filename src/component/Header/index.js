import React from "react";
import group1 from "../../assets/Img/Group 1.svg";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={group1} alt="img" />
          <div className="header--nav">
            <a href="#">Главная</a>
            <a href="#">Сеансы</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакты</a>
            <a href="#">Новости</a>
            <NavLink to={"/iam"}>Обо мне</NavLink>
            <a href="#">Блог</a>
          </div>
          <div className="header--nav__btn">
            <button>записаться на сеанс</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

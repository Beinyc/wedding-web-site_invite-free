import React, { useState, useEffect } from 'react';
import "./Header.css";

import headerImage from "../../images/ryki.jpg";
import backgroundImage from '../../images/white.jpg'
import lineImage from '../../images/header__line.jpg'

export default function Header(props) {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-26T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className='header'>
      <div className='header__width'>
        <img className='header__image' src={headerImage} alt="изображение рук" />
        <h1 className='header__title'>
          Август
          <br />
          and
          <br />
          Маргарита
        </h1>
        <p className='header__paragraph'>26 декабря 2024</p>
        <div className="header__timer" style={timerStyle}>
            <div className="header-timer-segment">
                <span className="header-timer-number">{timeLeft.days || '0'}</span>
                <span className="header-timer-label">Дней</span>
            </div>
            <div className="header-timer-segment">
                <span className="header-timer-number">{timeLeft.hours || '0'}</span>
                <span className="header-timer-label">Часов</span>
            </div>
            <div className="header-timer-segment">
                <span className="header-timer-number">{timeLeft.minutes || '0'}</span>
                <span className="header-timer-label">Минут</span>
            </div>
            <div className="header-timer-segment">
                <span className="header-timer-number">{timeLeft.seconds || '0'}</span>
                <span className="header-timer-label">Секунд</span>
            </div>
        </div>
        <img className='header-line__image' src={lineImage} alt="иконка линий границ блока" />
      </div>
    </div>
  );
}

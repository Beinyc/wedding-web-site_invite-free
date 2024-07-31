import React from "react";

import "./Schedule.css";

export default function Schedule() {
  return (
    <div className="schedule">
      <div className="schedule__width">
        <h4 className="schedule__title">Свадебное расписание</h4>
        <div className="schedule__card-flex">
            <p className="schedule__time">16:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Сбор гостей</p>
            <p className="schedule__paragraph-down">не забываем про дресс-код</p>
          </div>
        </div>
        <div className="schedule__card-flex">
            <p className="schedule__time">17:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Роспись</p>
            <p className="schedule__paragraph-down">ул. Центральная, 55</p>
          </div>
        </div>
        <div className="schedule__card-flex">
            <p className="schedule__time">18:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Свадебный банкет</p>
          </div>
        </div>
        <div className="schedule__card-flex">
            <p className="schedule__time">20:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Первый танец молодых</p>
          </div>
        </div>
        <div className="schedule__card-flex">
            <p className="schedule__time">22:00</p>
          <div className="schedule__cart">
            <p className="schedule__paragraph">Фейрверк</p>
          </div>
        </div>
        <div className="schedule__map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa739f21d0297e00fbee10804c9a3a16cb4d169836d0944c94043cb133ce794b9&amp;source=constructor"></iframe>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import './Menu.css'

export default function Menu() {
    return (
        <div className='menu'>
            <div className='menu__width'>
                <h3 className='menu__title'>МЕНЮ</h3>
                <p className='menu__paragraph'>Меню разнообразно, поэтому сообщите нам заранее, если у вас есть какие-либо предпочтения или диетические ограничения. После подтверждения вы сможете пройти опрос о своих вкусовых предпочтениях и напитках.</p>
                <h3 className='menu__title'>ПОЖЕЛАНИЯ ПО ПОДАРКАМ</h3>
                <p className='menu__paragraph'>Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас!</p>
                <h3 className='menu__title'>ПОДТВРЕЖДЕНИЕ</h3>
                <p className='menu__paragraph'>Пожалуйста подтвердите свое присутствие до 15.11.2024</p>
                <h3 className='menu__title'>ФОТО</h3>
                <p className='menu__paragraph'>Опубликуйте фото дня нашей свадьбы в соц.сетях с хештегом #</p>
                <p className='menu__paragraph'>Ждем Вас на свадьбе!</p>
                <button className='menu__button'>Подтвредить</button>
            </div>
        </div>
    );
}
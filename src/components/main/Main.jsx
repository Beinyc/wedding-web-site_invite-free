import React from 'react';

import './Main.css'

import pariImage from '../../images/main__pair.jpg'
import groomImage from '../../images/main__groom.jpg'
import brideImage from '../../images/main__bride.jpg'

export default function Main() {
    return (
        <div className='main'>
           <div className='main__width'>
                <h2 className='main__title'>Дорогой гость!</h2>
                <p className='main__paragraph'>
                Мы рады сообщить Вам, что 22.10.2024 состоится самое главное торжество в нашей жизни - день нашей свадьбы!
                <br />
                Приглашаем Вас разделить с нами радость этого незабываемого дня.
                <br />
                26.12.2024 в 10:00
                <br />
                Дворец бракосочетания №1
                <br />
                Английская наб, 28
                </p>
                <img className='main__image-pair' src={pariImage} alt="фото пары" />
                <p className='main__paragraph-pair'>Там, где посеяна любовь, растёт радость.</p>
                <div className='main__cart-flex'>
                    <div className='main__cart'>
                        <img className='main__image-people' src={groomImage} alt="фото жениха" />
                        <p className='main__paragraph-people' >Жених</p>
                    </div>
                    <div>
                        <img className='main__image-people' src={brideImage} alt="фото невесты" />
                        <p className='main__paragraph-people' >Невеста</p>
                    </div>
                </div>
           </div>
        </div>
    );
};
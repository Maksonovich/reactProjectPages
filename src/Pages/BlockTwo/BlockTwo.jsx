import React from 'react'
import imagesOne from '../../Assets/Pages/SecondBLock/imageOne.png'
import imagesTwo from '../../Assets/Pages/SecondBLock/imageTwo.png'
import SecondBlockImgOne from '../../Assets/Pages/SecondBLock/SecondBlock-images (1).png'
import SecondBlockImgTwo from '../../Assets/Pages/SecondBLock/SecondBlock-images (2).png'
const BlockTwo = () => {
  return (
    <div className='BlockTwo'>
        <div className='container'>
            <div className='BlockTwo__inner'>
                <div className='BlockTwo__images'>
                  <img src={imagesTwo} alt=''/>
                  <img className='BlockTwo__second-image' src={imagesOne} alt=''/>
                </div>
            </div>
            <div className='BlockTwo_Context'>
              <h2 className='BlockTwo_Header'>о нас</h2>
              <p className='BlockTwo_title'>
                <br/>Броские сумки George Gina & Lucy поднимают настроение и своим обладательницам и окружающим. <br/><br/>
                Birkenstock – это обувь с мягкой ортопедической стелькой, позволяющая долгое время находиться в обуви не уставая. <br/> <br/>
                Для всех представленных в бутике брендов важным приоритетом является экологическая безопасность одежды и производства. <br/>
              </p>
              <div className='BlockTwo_images-Two'>
                <img src={SecondBlockImgTwo} alt='' className='BlockTwo_image'/>
                <img src={SecondBlockImgOne} alt='' className='BlockTwo_image BlockTwo_two'/> 
              </div>
            </div>
            <div className='BlockTwo_title-Content'>
              <div className='BlockTwo-textIn'>
                <p className='BlockTwo-text'>
                  Для всех представленных в бутике брендов важным приоритетом является экологическая безопасность одежды и производства.
                </p>
              </div>
            </div>
            <div className='Footer'>
        <div className='Footer__inner'>
            <div className='Footer__inner-contacts'>
                <h2 className='Footer__inner-contacts-header'>Будьте в курсе событий</h2>
                <input type="text" className='Footer__inner-contacts-search'>
                </input>
                <div className='Footer__inner-links'>
                    <li className='Footer__links'>О нас</li>
                    <li className='Footer__links'>Распространенные вопросы</li>
                    <li className='Footer__links'><a href=''></a>Бренды</li>
                </div>
            </div>
        </div>
  </div>
        </div>
    </div>
  )
}

export default BlockTwo
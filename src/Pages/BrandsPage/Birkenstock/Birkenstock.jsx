import React from 'react'
import ImageBirkenstock from '../../../Assets/Pages/BrandsImages/Birkenstock/BirkenstockLeft.png'
import ImageBirkenstockTwo from '../../../Assets/Pages/BrandsImages/Birkenstock/BirkenstockRight.png'

const Birkenstock = () => {
  return (
    <div className='Birkenstock'>
        <div className='container'>
            <div className='Birkenstock_inner'>
                <div className='Birkenstock_inner-main'>
                    <h2 className='Birkenstock_main-header'>
                        birkenstock
                    </h2>
                    <p className='Birkenstock_main-title'>
                        Свою славу она заслужила благодаря удобству, экологичности материалов и поддержанию здоровья ног. Знаменитая мягкая ортопедическая стелька фирмы BIRKENSTOCK позволяет долгое время находиться в обуви не уставая.
                        В 1990 году пара сандалий BIRKENSTOCK Аризона в США была признана самой <br/> экологичной.<br/>
                        В 2004 году BIRKENSTOCK были удостоены звания «лучший дизайн, проверенный годами <br/> и подходящий всем». <br/>  
                        На данном этапе бренд производит не только вьетнамки и сандалии, а и много других комфортных видов обуви. Созданы в стиле кэжуал и вписываются в будничные образы. Бренд также прославился капсульными коллекциями, выпущенными в коллаборации со многими современными дизайнерами.
                    </p>
                    <img className='Birkenstock_main-image' src={ImageBirkenstock} alt=''/>
                </div>
                <div className='Birkenstock_main-imageTwo'>
                    <img className='Birkenstock_main-image-second' src={ImageBirkenstockTwo} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Birkenstock
import React from 'react'
import imageOne from '../../../Assets/Pages/BrandsImages/Vintage/Vintage-imgOne (1).png'
import imageTwo from '../../../Assets/Pages/BrandsImages/Vintage/Vintage-imgOne (2).png'

const Vintage = () => {
  return (
    <div className='Vintage'>
        <div className='container'>
            <div className='vintage'>
                <div className='vintage__vin__left'>
                    <img className='vin__img-left' src={imageOne} alt="" />
                </div>
                <div className='vintage__vin__right'>
                    <div className='vintage__vin__right-text'> 
                        <h2 className='vintage__vin__right-title'>American vintage</h2>
                        <p className='vintage__vin__right-suptitle'>
                        Продукция также включает немногочисленные аксессуары в виде шарфов, ремней, шапок, а также женских сумок. <br />
                        Несмотря на название «American Vintage», бренд создан французом Мишель Азулэ.
                        Отличие бренда от других - это простота в исполнении изделий (минимализм) и  100% натуральные ткани. бренд сочетает в себе расслабленность южной Франции и простоту Америки. 
                        При создании одежды используется очень тонкий высококачественный трикотаж, который дает ощущение «второй кожи». Основная цветовая гамма - это спокойные пастельные расцветки: ореховые, бежевые, желтые, серые и так далее. 
                        На первый взгляд, кажется, что вещи просты в своем исполнении, но вся продукция от этой марки выглядит очень  стильно, оставляя без ума многих покупателей.
                        </p>
                    </div>
                    <div className='vintage__vin__right-img'>
                        <img src={imageTwo} alt="" />
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Vintage
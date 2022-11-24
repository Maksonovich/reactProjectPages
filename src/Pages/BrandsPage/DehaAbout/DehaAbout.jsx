import React from 'react'
import ImageLeft from '../../../Assets/Pages/BrandsImages/Deha-About/Deha-About-img (1).png'
import ImageRight from '../../../Assets/Pages/BrandsImages/Deha-About/Deha-About-img (2).png'

const DehaAbout = () => {
  return (
    <div className='Deha-About'>
      <div className='container'>
        <div className='Deha-About__inner'>
          <div className='Deha-About__inner-left'>
            <div className='Deha-About__inner-left-text'>
              <h2 className='Deha-About__inner-left-text-header'>
                DeHA
              </h2>
              <p className='Deha-About__inner-left-text-title'>
                Требование и суть коллекций DEHA-это  чувство женственности ,  не показной, но подходящей 
                 всем женщинам, которые являются женами, матерями, профессионалами, сексуальными, 
                 спортивными и веселыми одновременно.
                Коллекции DEHA идеально подходят для ежедневных тренировок, но Deha – больше, чем 
                одежда для спорта, это удобная и естественная женственность на каждый день.Это яркие 
                струящиеся ткани, легкость и удобство.
                DEHA очень чутко относится к теме экологической устойчивости  и защите окружающей среды.
                 Поэтому расширяет каждый сезон ассортимент одежды из органических натуральных волокон и 
                 переработанных материалов, вносит свой вклад в  благосостояние планеты . 
              </p>
              <img src={ImageLeft} alt='' className='Deha-About__inner-left-text-image'/>
            </div>
          </div>
          <div className='Deha-About__inner-right'>
            <img src={ImageRight} alt='' className='Deha-About__inner-right-image'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DehaAbout
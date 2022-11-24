import React from 'react'
import BrandGeorgyLucyImg from '../../../Assets/Pages/BrandsImages/BrandGeorgyLucy/BrandGeorgyLucy.png'

const BrandGeorgyLucy = () => {
  return (
    <div className='BrandGeorgyLucy'>
        <div className='container'>
            <div className='BrandGeorgyLucy_inner'>
                <img src={BrandGeorgyLucyImg} alt='' className='BrandGeorgyLucy_inner-img'/>
                <div className='BrandGeorgyLucy_inner-main'>
                    <h2 className='BrandGeorgyLucy_inner-header'>
                        george gina & lucy
                    </h2>
                    <p className='BrandGeorgyLucy_inner-title'>
                        Популярность и любовь дизайнеры заслужили тем, что соединили в своих творениях 
                        оригинальность, индивидуальность и легкий юмор, что вызвало у них появление <br/> огромного 
                        количества поклонниц во всем мире. <br/> Каждая сумка этого уникального бренда неповторима и 
                        индивидуальна, а их отличие от других брендовых сумок в том, что они имеют 
                        преувеличенно крупную фурнитуру – <br/> кольца, карабины и молнии.Такие сумки созданы 
                        специально для тех , кто любит  индивидуальность и неповторимость.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandGeorgyLucy
import React from 'react'
import img1 from '../../assets/Primary Photo Placeholder.png'
import img2 from '../../assets/Secondary Photo Placeholder.png'
import img3 from '../../assets/Secondary Photo Placeholder1.png'

const Card = () => {
  return (
    <div className='card-container'>
      <div className="main-img">
        <img src={img1} alt="" />
        <div className="secondary-imgs">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <button className="number-btn">
                1025+
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default Card

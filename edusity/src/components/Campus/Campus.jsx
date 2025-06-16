import React from 'react'
import './Campus.css'
import campus1 from '../../assets/campus1.jpg'
import campus2 from '../../assets/campus2.jpg'
import campus3 from '../../assets/campus3.jpg'
import campus4 from '../../assets/campus4.jpg'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={campus1} alt="campus-img-1" />
        <img src={campus2} alt="campus-img-2" />
        <img src={campus3} alt="campus-img-3" />
        <img src={campus4} alt="campus-img-4" />
      </div>
      <button className='btn dark-btn'>See more here → </button>
    </div>
  )
}

export default Campus

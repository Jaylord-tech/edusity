import React, { useRef } from 'react'
import './Testimonials.css'
import right_arrow from '../../assets/right_arrow.png'
import left_arrow from '../../assets/left_arrow.png'
import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'
import test4 from '../../assets/test4.png'


const Testimonials = () => {

 const slider = useRef() 
 let tx = 0;

const forward = ()=>{
if (tx > -50){
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`
}

const backward = ()=>{
  if(tx < 0){
tx += 25;
  }
slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonial'>
        <img onClick={forward} src={right_arrow} alt="" className='next-btn'/>
        <img onClick={backward} src={left_arrow} alt="" className='back-btn' />
        <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide' >
                            <div className="user-info">
                           <img src={test1} alt="" />
                             <div>
                               <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <p>Choosing to pursud my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectattions.</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide' >
                            <div className="user-info">
                           <img src={test2} alt="" />
                             <div>
                               <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <p>Choosing to pursud my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectattions.</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide' >
                            <div className="user-info">
                           <img src={test3} alt="" />
                             <div>
                               <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <p>Choosing to pursud my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectattions.</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide' >
                            <div className="user-info">
                           <img src={test4} alt="" />
                             <div>
                               <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            </div>
                            <p>Choosing to pursud my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectattions.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Testimonials

import React from 'react'
import './Programs.css'
import profile_1 from '../../assets/profile_1.png'
import profile_2 from '../../assets/profile_2.png'
import profile_3 from '../../assets/profile_3.png'
import icon_1 from '../../assets/icon_1.png'
import icon_2 from '../../assets/icon_2.png'
import icon_3 from '../../assets/icon_3.png'

const Programs = (subTitle,Title) => {
  return (
    <div className='programs'>

      <div className="program">
        <img src={profile_1} alt="" />
        <div className="caption">
           <img src={icon_1} alt="" />
           <p>Graduate Degree</p>
        </div>
        </div>

        <div className="program">
        <img src={profile_2} alt="" />
        <div className="caption">
           <img src={icon_2} alt="" />
           <p>Masters Degree</p>
        </div> 
        </div>

        <div className="program">
        <img src={profile_3} alt="" />
        <div className="caption">
           <img src={icon_3} alt="" />
           <p>Post Graduate</p>
        </div>
      </div>
      
    </div>
  )
}

export default Programs

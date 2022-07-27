import React from 'react'
import Task from './Task';
import steps_logo from '../images/steps_logo.png'
import workout_logo from '../images/workout_logo.png'
import nutrition_logo from '../images/nutrition_logo.png'

export default function Tasklist() {


  return (
    <div className='container'>
        <ul className="heading">
            <li><img src={steps_logo} alt="" width={13} height={15}/>  <span>Steps</span></li>
            <li><img src={workout_logo} alt="" width={23} height={23} id="workout_logo" /> <span>Workout</span></li>
            <li><img src={nutrition_logo} alt="" width={24} height={19.2}/> <span>Nutrition</span></li>
        </ul>
        <Task/>
    </div>
  )
}

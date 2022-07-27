import React from 'react'
import userImage from '../images/user.png'
import right_button from '../images/right_button.png'
import user_tick from '../images/user_tick.png'
import calander from '../images/calender.png'
import bell_icon from '../images/bell_icon.png'
import plus_icon from '../images/plus_icon.png'
import minus_icon from '../images/minus_icon.png'


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PieChart } from 'react-minimal-pie-chart'

export default function Task() {

  let percentage = 70;
  return (
    <>
      <div className="item">
        <div className="userDetails">
          <div className="photo">
            <img src={userImage} alt="" />
          </div>
          <div className="userInfo">
            <div className="name">
              Charvie Sharma
            </div>
            <div className="email">
              charviesharma@gmail.com
            </div>
            <div className="name"></div>
            <div className="email"></div>
          </div>
        </div>
        <div className="information">
          <div className="steps">
            <div className="left">
              <CircularProgressbar styles={"#7FD18C"} counterClockwise={false} value={percentage} text={`${percentage}%`} />
            </div>
            <div className="right">
              <img src={plus_icon} alt="" />
              <div className="text1">4k</div>
              <div className="text2">target</div>
              <img src={minus_icon} alt="" />
            </div>
          </div>
          <div className="workout">
            <div className="left">
              <div className="top"><img src={user_tick} alt="" width={21.35} height={16.25} /> <span>15 Oct</span></div>
              <div className="bottom"><img src={calander} alt="" width={19.5} height={21.13} /> <span>22 Oct</span></div>
            </div>
            <div className="right">
              <img src={right_button} alt="" />
            </div>
          </div>
          <div className="nutrition">
            <div className="left">
              <div className="leftMiddle">
                <div className="text1">2547</div>
                <div className="text2">calories</div>
              </div>
              <PieChart
                lineWidth={20}
                data={
                  [
                    { title: 'Two', value: 33, color: '#F5C90F' },
                    { title: 'Three', value: 33, color: '#03C7FC' },
                    { title: 'One', value: 33, color: '#F45C84' },
                  ]
                }
              />
            </div>
            <div className="middle">
              <img src={plus_icon} alt="" />
              <div className="text1">2.5k</div>
              <div className="text2">target</div>
              <img src={minus_icon} alt="" />
            </div>
            <div className="right">
              <img src={right_button} alt="" />
            </div>
          </div>
        </div>
        <div className="bellIcon">
          <img src={bell_icon} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="userDetails">
          <div className="photo">
            <img src={userImage} alt="" />
          </div>
          <div className="userInfo">
            <div className="name">
              Charvie Sharma
            </div>
            <div className="email">
              charviesharma@gmail.com
            </div>
            <div className="name"></div>
            <div className="email"></div>
          </div>
        </div>
        <div className="information">
          <div className="steps">
            <div className="left">
              <CircularProgressbar styles={"#7FD18C"} counterClockwise={false} value={percentage} text={`${percentage}%`} />
            </div>
            <div className="right">
              <img src={plus_icon} alt="" />
              <div className="text1">4k</div>
              <div className="text2">target</div>
              <img src={minus_icon} alt="" />
            </div>
          </div>
          <div className="workout">
            <div className="left">
              <div className="top"><img src={user_tick} alt="" width={21.35} height={16.25} /> <span>15 Oct</span></div>
              <div className="bottom"><img src={calander} alt="" width={19.5} height={21.13} /> <span>22 Oct</span></div>
            </div>
            <div className="right">
              <img src={right_button} alt="" />
            </div>
          </div>
          <div className="nutrition">
            <div className="left">
              <div className="leftMiddle">
                <div className="text1">2547</div>
                <div className="text2">calories</div>
              </div>
              <PieChart
                lineWidth={20}
                data={
                  [
                    { title: 'Two', value: 33, color: '#F5C90F' },
                    { title: 'Three', value: 33, color: '#03C7FC' },
                    { title: 'One', value: 33, color: '#F45C84' },
                  ]
                }
              />
            </div>
            <div className="middle">
              <img src={plus_icon} alt="" />
              <div className="text1">2.5k</div>
              <div className="text2">target</div>
              <img src={minus_icon} alt="" />
            </div>
            <div className="right">
              <img src={right_button} alt="" />
            </div>
          </div>
        </div>
        <div className="bellIcon">
          <img src={bell_icon} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="userDetails">
          <div className="photo">
            <img src={userImage} alt="" />
          </div>
          <div className="userInfo">
            <div className="name">
              Charvie Sharma
            </div>
            <div className="email">
              charviesharma@gmail.com
            </div>
            <div className="name"></div>
            <div className="email"></div>
          </div>
        </div>
        <div className="information">
          <div className="steps">
            <div className="left">
              <CircularProgressbar styles={"#7FD18C"} counterClockwise={false} value={percentage} text={`${percentage}%`} />
            </div>
            <div className="right">
              <img src={plus_icon} alt="" />
              <div className="text1">4k</div>
              <div className="text2">target</div>
              <img src={minus_icon} alt="" />
            </div>
          </div>
          <div className="workout">
            <div className="left">
              <div className="top"><img src={user_tick} alt="" width={21.35} height={16.25} /> <span>15 Oct</span></div>
              <div className="bottom"><img src={calander} alt="" width={19.5} height={21.13} /> <span>22 Oct</span></div>
            </div>
            <div className="right">
              <img src={right_button} alt="" />
            </div>
          </div>
          <div className="nutrition">
            <div className="left">
              <div className="leftMiddle">
                <div className="text1">2547</div>
                <div className="text2">calories</div>
              </div>
              <PieChart
                lineWidth={20}
                data={
                  [
                    { title: 'Two', value: 33, color: '#F5C90F' },
                    { title: 'Three', value: 33, color: '#03C7FC' },
                    { title: 'One', value: 33, color: '#F45C84' },
                  ]
                }
              />
            </div>
            <div className="middle">
              <img src={plus_icon} alt="" />
              <div className="text1">2.5k</div>
              <div className="text2">target</div>
              <img src={minus_icon} alt="" />
            </div>
            <div className="right">
              <img src={right_button} alt="" />
            </div>
          </div>
        </div>
        <div className="bellIcon">
          <img src={bell_icon} alt="" />
        </div>
      </div>
    </>
  )
}

let jsonData = {
  userId: 1,
  name: "Charvie Sharma",
  email: "charviesharma.cs@gmail.com",
  steps_walked: 2547,
  steps_target: 4000,//4k
  performedDate: "15 Oct",
  scheduledDate: "22 Oct",
  calorieIntake: 2547,
  calorieTarget: 2500,//2.5k
  proteinConsumed: 45,//45g
  proteinTarget: 70,//70g
  carbConsumed: 50,//50g
  carbTarget: 70,//70g
  fatConsumed: 30,//30g
  fatTarget: 70,//70g
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var today =new Date();
var dateIs=today.getDate()+" "+monthNames[today.getMonth()]

var incrementSteps=()=>{
  jsonData.steps_target=jsonData.steps_target+500;
}
var decrementSteps=()=>{
  jsonData.steps_target=jsonData.steps_target-500;
}



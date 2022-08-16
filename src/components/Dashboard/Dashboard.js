import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './dashboard.css'
const Dashboard = () => {
    const [Activities,SetActivities]=useState(0)
    const [Level,SetLevel]=useState('senior Desiner')
    const [MeetingTime,SetMeetingTime]=useState([{
      year:2022,
      month:'April',
      day:8,
      startHour:5,
      endHour:8,
      title:'Business Thinking for Desiners',
      description:'Bring a business mind to design, transford your career.'
    },{
      year:2022,
      month:'April',
      day:8,
      startHour:11,
      endHour:12,
      title:'The Design Engineering Process',
      description:'The enginerering design process is a series of steps...'
    }])

    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    return (
      <div id="OuterBox">
        <div id='LeftSide'>
          <div id='logo'></div>
          <div id='topLogo'>   
            <div className='innerLogoName'>exp</div>
            <div className='innerLogoName rightLogoName'>rolling</div>
          </div>
          <div id='LeftMenu'>
            <a className='on'><i class="fa fa-tachometer" aria-hidden="true"></i>{' '}<p>Dashboard</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-list-alt" aria-hidden="true"></i>{' '}<p>Classes</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-map-o" aria-hidden="true"></i>{' '}<p>Courses</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-get-pocket" aria-hidden="true"></i>{' '}<p>Earnings</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-newspaper-o" aria-hidden="true"></i>{' '}<p>Statements</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
          </div>
          <div id='leftButtomMenu'>
            <p id='LBMTitle'>insights</p>
            <a onClick={()=>{dispatch({type:"ADD"})}}><i class="fa fa-envelope-o" aria-hidden="true"></i>{' '}<p>Messages</p> {counter.messages!=0 ? <div className='LBMNumber'><p>{counter.messages}</p></div> : null} </a>
            <a ><i class="fa fa-bolt" aria-hidden="true"></i>{' '}<p>Activities </p>{Activities!=0 ? <div className='LBMNumber'>{Activities}</div> : null}</a>
          </div>
        </div>
        
  
        <div id='MiddleSide'>
          <div id='MTLBox'>
            <p id='MTLBTitle'>Search the<br/> 200,000+ Creators</p>
            <p id='MTLBDisc'>Upgrade to watch, play, learn, make and discover</p>
            <div id='MTLBButton'>Upgrade Now <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
          </div>
          <div id='MTRBox'></div>
          <div id='MMBBox'>
            <div id='week'>Friday 8 Apr <i class="fa fa-angle-down" aria-hidden="true"></i><br/>
              <div id='menu'>
                <div className='weekDay'>Saturday 9 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Sunday 10 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Monday 11 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Tuesday 12 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Tursday 13 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
              </div>
            </div>
  
                {
                  MeetingTime.map((item,index)=>{
                    return(
                      <div id='challenge' onClick={()=>{dispatch({type:"CHANGE",value:index})}}>
                        <div id='leftChallenge'></div>
                        <div id='challengeBackground'></div>
                        <div id='challengeTime'>
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                          <p>{item.startHour}-{item.endHour}</p>
                        </div>
                        <div id='challengeTitle'>
                          {item.title}
                        </div>
                        <div id='challengeDesc'>{item.description}</div>
                        <i class="fa fa-arrow-right" id='CArrow' aria-hidden="true"></i>
                      </div>
                    )
                  })
                }
            
          </div>
        </div>
        <div id='RightSide'>
  
          <div id='RSBox'>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type='text' id='RSBInput' placeholder='Search'></input>
          </div>
          <div id='RMBox'>
            <a>
              Premeum Class ...
            </a>
            <p id='TBYCC'>
              Take Back Your Ceative Control
            </p>
          </div>
          <div id='RBBox'>
            <div className='MeetingTime'>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <p>{String(MeetingTime.day)}{' '}{MeetingTime[counter.ShowPlan].month},{MeetingTime[counter.ShowPlan].year}</p><br/>
              <p className='MT'>{MeetingTime[counter.ShowPlan].startHour}-{MeetingTime[counter.ShowPlan].endHour} AM</p>
            </div>
  
            <div className='MeetingTime'>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              <p>Duration</p><br/>
              <p className='MT'>{MeetingTime[counter.ShowPlan].endHour-MeetingTime[counter.ShowPlan].startHour} Hours</p>
            </div>
  
            <div className='MeetingTime'>
              <i class="fa fa-bars" aria-hidden="true"></i>
              <p>Level</p><br/>
              <p className='MT'>{Level}</p>
            </div>
            <div id='RTLBButton'>Join Now <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard
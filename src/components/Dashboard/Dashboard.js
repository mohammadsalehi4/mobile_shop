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
      title:'23 April,2022',
      description:'Order Code: 2233, Price: $430, off: 0%',
      models:'Galaxy A20'
    },{
      year:2022,
      month:'April',
      day:8,
      startHour:5,
      endHour:8,
      title:'23 April,2022',
      description:'Order Code: 2233, Price: $830, off: 0%',
      models:'Iphone 13 pro Max'
    }])

    const counter = useSelector(state => state);
    const States = useSelector(state => state);
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch({type:"CHANGEPRODUCTPAGE",value:false})
    },[])
    
    return (
      <div id="OuterBox">
        <div id='LeftSide'>
          <div id='logo'></div>
          <div id='topLogo'>   
            <div className='innerLogoName'>Dash</div>
            <div className='innerLogoName rightLogoName'>board</div>
          </div>
          <div id='LeftMenu'>
            <a id='on'><i class="fa fa-shopping-cart" aria-hidden="true"></i>{' '}<p>Previous orders</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-gift" aria-hidden="true"></i>{' '}<p>Gift cards</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-info" aria-hidden="true"></i>{' '}<p>User informations</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-money" aria-hidden="true"></i>{' '}<p>Financial</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
            <a ><i class="fa fa-sign-out" aria-hidden="true"></i>{' '}<p>Log out</p><i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></a>
          </div>
          <div id='leftButtomMenu'>
            <p id='LBMTitle'>insights</p>
            <a onClick={()=>{dispatch({type:"ADD"})}}><i class="fa fa-envelope-o" aria-hidden="true"></i>{' '}<p>Messages</p> {counter.messages!=0 ? <div className='LBMNumber'><p>{counter.messages}</p></div> : null} </a>
            <a ><i class="fa fa-bolt" aria-hidden="true"></i>{' '}<p>Activities </p>{Activities!=0 ? <div className='LBMNumber'>{Activities}</div> : null}</a>
          </div>
        </div>
        
  
        <div id='MiddleSide'>
          <div id='MTLBox'>
            <p id='MTLBTitle'>Search the<br/> 200,000+ Products</p>
            <p id='MTLBDisc'>Upgrade for better and faster services and more facilities</p>
            <div id='MTLBButton'>Upgrade Now <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
          </div>
          <div id='MTRBox'></div>
          <div id='MMBBox'>
            {/* <div id='week'>Friday 8 Apr <i class="fa fa-angle-down" aria-hidden="true"></i><br/>
              <div id='menu'>
                <div className='weekDay'>Saturday 9 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Sunday 10 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Monday 11 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Tuesday 12 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
                <div className='weekDay'>Tursday 13 Apr <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
              </div>
            </div> */}
              <div id='CHBox'>

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
                        <div id='models'>{item.models}</div>
                      </div>
                    )
                  })
                }
            </div>
            
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
              Complete your unfinished order
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
            <div id='RTLBButton'>Complete <i class="fa fa-arrow-right FAMenu" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard
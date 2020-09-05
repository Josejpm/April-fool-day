import React, { useEffect,useContext,useState } from 'react';
import {AppContext} from '../context/AppContext'
import { Fragment } from 'react';
import Chart from './stats/chart/chart';

const MainTimer = () => {
  const {seconds,setSeconds,resetA,user,click,colorLog}=useContext(AppContext)
  const [cheater,setCheater] = useState(false)


  //LocalStorage para la consistencia del reset solo 1 vez
  const activeButton = JSON.parse( localStorage.getItem('activeButton') ) 
  if(activeButton === null){
    localStorage.setItem('activeButton','true')
  }

  useEffect(() => {
     if(!JSON.parse(localStorage.getItem('activeButton'))){
       setCheater(true)
     }  
  }, [])

  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1 );
      }, 1000);
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">

        {activeButton 
          ? <button className="button" onClick={resetA}>Reset</button>
          : <button disabled className="button">Reset</button>
        }

      </div>

      {cheater ? <p>You already clicked, therfore your assigned color is White</p> : null }

      {click
        ? <p> {colorLog[(colorLog.length)-1]} color has been assigned to you</p>
        : null
      }

      {click 
        ? <Chart/>        
        : null     
      }

      {/* <ul>
        {user.map(u=>{
          return <li>{u.color} color has been assigned to {u.userName}</li>
        })}
      </ul> */}




    </div>
  );
};

export default MainTimer;
import React, { useEffect,useContext,useState } from 'react';
import './main-timer.scss'
import {AppContext} from '../../../context/AppContext'
import { Fragment } from 'react';
import Resume from '../../stats/resume/resume'

const MainTimer = () => {
  const {seconds,setSeconds,resetA,click,myColor,saveColor}=useContext(AppContext)
  const [cheater,setCheater] = useState(false)

  const activeButton = JSON.parse( localStorage.getItem('activeButton') ) 
  if(activeButton===null){
    localStorage.setItem('activeButton','true')
  }

  //Localstorage para no permitir los clicks mas de una vez
  useEffect(() => {
     if(!JSON.parse(localStorage.getItem('activeButton'))){
       saveColor('White')
       setCheater(true)
     }  
     // eslint-disable-next-line
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
    <Fragment>

      <div className="timer-numbers">
          {seconds}
      </div>

        {activeButton 
          ? <button className='enabled-button' onClick={resetA}>Click me!</button>
          : <button disabled className="disabled-button">Can't click again!</button>
        }

      {cheater
        ? 
          <Fragment>
            <p className='color-message' > 
              <i className={`fas fa-check-circle`}></i> 
              You already clicked, therfore your assigned color is White
            </p> 
            <Resume/>
          </Fragment>

        : null }

      {click
        ? <p className='color-message animated fast fadeIn' > 
            <i className={`fas fa-check-circle ${myColor} `}></i>
            {myColor} color has been assigned to you
          </p>
        : null
      }
    </Fragment>
  );
};

export default MainTimer;
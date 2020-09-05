import React, { useState, useEffect, useContext, Fragment } from 'react';
import {AppContext} from '../context/AppContext'


const AuxTimer = () => {

  const {resetB}=useContext(AppContext)
  const [timer, setTimer] = useState(1)

  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        setTimer(Math.floor(Math.random()*30000))
        resetB(Math.floor(Math.random()*60));
      }, timer );
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [timer]);

  return (
    <Fragment/>
  );
};

export default AuxTimer;
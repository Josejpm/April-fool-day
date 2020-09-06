import React, { useState, useEffect, useContext, Fragment } from 'react';
import {AppContext} from '../../../context/AppContext'


const AuxTimer = () => {

  //Timer auxiliar, tiene la finalidad de simular aleatoriamente otros clicks de usuarios conectados a la pagina
  
  const {resetB}=useContext(AppContext)
  const [timer, setTimer] = useState(1)

  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        setTimer(Math.floor(Math.random()*60000))
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
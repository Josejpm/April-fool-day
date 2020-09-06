import React, { createContext, useState } from 'react';
import axios from 'axios'
export const AppContext = createContext();


const AppProvider = (props) => {
  const [seconds,setSeconds]=useState(60);
  const [stats,setStats]=useState({});
  const [click,setClick]=useState(false)
  const [colorLog,setColorLog] = useState([]);
  const [myColor,setMyColor] = useState('')
  const [userColor,setUserColor] = useState({
      dataArray:[]
  });
  const {dataArray}=userColor;

  //Funcion para el reset del timer al hacer click, obtiene el color asignado segun el tiempo
  const resetA = ()=>{
      const color = getColor(seconds);
      setMyColor(color)
      saveColor(color);
      localStorage.setItem('activeButton','false')
      setSeconds(60);
      setStats(getStats());
      setClick(true)
  }
  //Funcion para el reset del timer que simula otros usuarios en el juego, obtiene el color y el nombre de usuario
  const resetB = async (secondsData)=>{
      const color = getColor(secondsData);
      const userName = await axios(`https://jsonplaceholder.typicode.com/users/${Math.ceil(Math.random()*10)}`);
      saveColor(color);
      saveUser(color,userName);
      setStats(getStats());
      setSeconds(60);
  }

  //Guarda el usuario asociando un color
  const saveUser = (color,userName)=>{
    const data = {
      userName:userName.data.username,
      color
    }
    dataArray.unshift(data)
    setUserColor({dataArray})
  }

  //Funcion para guardar el color de cada usuario
  const saveColor = (color)=>{
    const colorArray = colorLog;
    colorArray.push(color);
    setColorLog(colorArray)
  }

  // Obtiene la estadistica de cuantas veces ha sido asignado un color
  const getStats = ()=>{
    const initialStats = {Purple:0,Blue:0,Green:0,Yellow:0,Orange:0,Red:0,Grey:0,White:0}
    const colorStats = colorLog.reduce((colorCount,color)=>{
      colorCount[color]=(colorCount[color] || 0)+1
      return colorCount;
    },initialStats)
    return colorStats
  }

  //Asigna un color segun el tiempo que resta en el cronometro
  const getColor= time =>{
      if(time===0){
        return 'Gray'
      }else if(time>0 && time<12){
          return 'Red'
      }else if (time>=12 && time<22){
          return 'Orange'
      }else if (time>=22 && time<32){
          return 'Yellow'
      }else if (time>=32 && time<42){
          return 'Green'
      }else if (time>=42 && time<52){
          return 'Blue'
      }else if (time>=52 && time<=60){
        return 'Purple'
      }
  }
  return ( 
      <AppContext.Provider
          value={{       
              seconds,
              stats,
              click,
              colorLog,
              myColor,
              user:userColor.dataArray,
              resetA,
              resetB,
              setSeconds,
              saveColor
          }}
      >
          {props.children}
      </AppContext.Provider>
  );
}
 
export default AppProvider;
import React, { createContext, useState } from 'react';
import axios from 'axios'
export const AppContext = createContext();


const AppProvider = (props) => {
    const [seconds,setSeconds]=useState(60);
    const [stats,setStats]=useState({});
    const [click,setClick]=useState(false)
    const [colorLog,setColorLog] = useState([]);
    const [userColor,setUserColor] = useState({
        dataArray:[]
    });
    const {dataArray}=userColor;

    const resetA = ()=>{
        const color = getColor(seconds);
        saveColor(color);
        //localStorage.setItem('activeButton','false')
        setSeconds(60);
        setStats(getStats());
        setClick(true)
    }

    const resetB = async (secondsData)=>{
        const color = getColor(secondsData);
        const userName = await axios(`https://jsonplaceholder.typicode.com/users/${Math.ceil(Math.random()*10)}`);
        saveColor(color);
        saveUser(color,userName)
        setSeconds(60);
    }

    const saveUser = (color,userName)=>{
      const data = {
        userName:userName.data.username,
        color
      }
      dataArray.push(data)
      setUserColor({dataArray})
    }

    const saveColor = (color)=>{
      const colorArray = colorLog;
      colorArray.push(color);
      setColorLog(colorArray)
      console.log(colorLog)
    }

    const getStats = ()=>{
      const initialStats = {Purple:5,Blue:5,Green:5,Yellow:5,Orange:5,Red:5,Grey:5,White:5}
      const colorStats = colorLog.reduce((colorCount,color)=>{
        colorCount[color]=(colorCount[color] || 0)+1
        return colorCount;
      },initialStats)
      
      return colorStats

    }

    const getColor= time =>{
        if(time===0){
          return 'Grey'
          //colorCounter('gray');
        }else if(time>0 && time<12){
            return 'Red'
          //colorCounter('red');
        }else if (time>=12 && time<22){
            return 'Orange'
          //colorCounter('orange');
        }else if (time>=22 && time<32){
            return 'Yellow'
          //colorCounter('yellow');
        }else if (time>=32 && time<42){
            return 'Green'
          //colorCounter('green');
        }else if (time>=42 && time<52){
            return 'Blue'
          //colorCounter('blue');
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
                user:userColor.dataArray,
                resetA,
                resetB,
                setSeconds
            }}
        >



            {props.children}
        </AppContext.Provider>


     );
}
 
export default AppProvider;
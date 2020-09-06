import React from 'react'
import './resume.scss'
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

//Componente para las estadisticas del juego
const Resume = () => {
    const {stats} = useContext(AppContext);
    const statsArray=[];

    for(const prop in stats){
        statsArray.push({
           [prop]:stats[prop] 
         })
    }
    return (
        <div className="resume-container">
            {statsArray.map(item=>(
                <p className="resume-item animated fadeIn"> 
                    <span className={`${Object.keys(item)} number`}>{Object.values(item)}</span>  
                    <span className='letter'>{Object.keys(item)}</span>  
                </p>
            ))}
        </div> 
        
     );
}
 
export default Resume;
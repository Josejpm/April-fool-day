import React from 'react'
import './Main.scss'
import MainTimer from '../../timers/main/main-timer'
import AuxTimer from '../../timers/aux/aux-timer'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import Resume from '../../stats/resume/resume'

//Componente principal donde se muestra el contador y las estadisticas
const Main = () => {
    const {click} = useContext(AppContext)
    return ( 
        <div className="main-container">
            <h1 className="main-title" >April Fools Day!</h1>
            <MainTimer/>
            {click ? <Resume/> : null }
            <AuxTimer/>
        </div>
     );
}
 
export default Main;
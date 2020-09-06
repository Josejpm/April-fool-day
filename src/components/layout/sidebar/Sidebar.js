import React, { useContext } from 'react'
import './Sidebar.scss'
import { AppContext } from '../../../context/AppContext';

//Muestra visualizaciones para los eventos simulados
const Sidebar = () => {

    const {user}=useContext(AppContext);
    
    return ( 
        <aside className="sidebar-container">
            <h2 className='sidebar-title'> Users Colors</h2>
            <ul className='users-list'>
            {user.map(u=>(
                <li > 
                    <i className={`fas fa-check-circle ${u.color} `}></i> 
                    {u.color} has been assigned to {u.userName}
                </li>
            ))}
            </ul>
        </aside>
     );
}
 
export default Sidebar;
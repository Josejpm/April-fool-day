import React, { Fragment } from 'react'
import AppProvider from './context/AppContext'

import './scss/App.scss'
import Sidebar from './components/layout/sidebar/Sidebar';
import Main from './components/layout/main/Main';

const App = () => {
    
    return ( 

        <Fragment>
            <AppProvider>
                <div className="site-container">
                    <Sidebar/>
                    <Main/>
                </div>
            </AppProvider>
        </Fragment>

     );
}
 
export default App;
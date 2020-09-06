import React, { Fragment } from 'react'
import './scss/App.scss'
import Sidebar from './components/layout/sidebar/Sidebar';
import Main from './components/layout/main/Main';
import Footer from './components/layout/footer/footer';
import AppProvider from './context/AppContext'

const App = () => {
    
    return ( 
        <Fragment>
            <AppProvider>
                <div className="site-container">
                    <div className="info-container">
                        <Main/>
                        <Sidebar/> 
                    </div>
                    <Footer/>
                </div>
            </AppProvider>
        </Fragment>
     );
}
 
export default App;
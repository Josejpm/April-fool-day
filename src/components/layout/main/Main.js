import React, { Fragment } from 'react'
import MainTimer from '../../main-timer'
import AuxTimer from '../../aux-timer'

const Main = () => {
    return ( 
        <Fragment>
            <MainTimer/>
            <AuxTimer/>
        </Fragment>
     );
}
 
export default Main;
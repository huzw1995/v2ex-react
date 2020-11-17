import React,{Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'

function tabs(){
    return (
        <div className={LightStyles.tabs}>
            <NavLink className={LightStyles.tabNavlink} activeClassName={LightStyles.tabNavlinkActive} to='/Home/0'>最热</NavLink>
            <NavLink className={LightStyles.tabNavlink} activeClassName={LightStyles.tabNavlinkActive} to='/Home/1'>最新</NavLink>
        </div>
    )
}

export default tabs
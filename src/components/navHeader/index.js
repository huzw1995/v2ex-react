import React from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'

function navHeader(){
    return (
        <div className={LightStyles.header}>
            <div className={LightStyles.logo}>
                <NavLink className={LightStyles.logoNavLink} to='/home/0'>V2EX</NavLink>
            </div>
            <div className="menu">
                <NavLink className={LightStyles.menuNavLink} activeClassName={LightStyles.menuNavLinkActive} to='/home/0'>首页</NavLink>
                <NavLink className={LightStyles.menuNavLink} activeClassName={LightStyles.menuNavLinkActive} to='/login'>登录</NavLink>
                <NavLink className={LightStyles.menuNavLink} activeClassName={LightStyles.menuNavLinkActive} to='/register'>注册</NavLink>
            </div>
        </div>
    )
}

export default navHeader
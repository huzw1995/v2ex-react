import React, { useEffect, useContext, Fragment } from 'react';
import { NavLink } from 'umi';
import { Switch } from 'antd';
import LightStyles from './lightStyle.less';
import DarkStyles from './darkStyle.less';

const Layouts: React.FC = (props) => {
  //   const { darkMode, switchDarkMode } = useContext(ThemeContext)
  //   let Styles = darkMode ? DarkStyles : LightStyles;
  //   const onChange = () => {
  //     switchDarkMode(!darkMode);
  //   };
  //   useEffect(() => {
  //     if (darkMode) {
  //       document.body.className = 'dark';
  //       const element = document.getElementById('root') as HTMLElement
  //       element.className = 'dark';
  //     } else {
  //       document.body.className = '';
  //       const element = document.getElementById('root') as HTMLElement
  //       element.className = '';
  //     }
  //   }, [darkMode]);
  return (
    <Fragment>
      <div className={LightStyles.header}>
        <div className={LightStyles.logo}>
          <NavLink className={LightStyles.logoNavLink} to="/home/0">
            V2EX
          </NavLink>
        </div>
        <div className="menu">
          {/* <span className={LightStyles.switchTitle}>夜间模式:</span>
        <Switch
          defaultChecked={false}
          size={'small'}
          onChange={onChange}
          style={{ marginRight: '8px' }}
        /> */}
          <NavLink
            className={LightStyles.menuNavLink}
            activeClassName={LightStyles.menuNavLinkActive}
            to="/home/0"
          >
            首页
          </NavLink>
          <NavLink
            className={LightStyles.menuNavLink}
            activeClassName={LightStyles.menuNavLinkActive}
            to="/login"
          >
            登录
          </NavLink>
          <NavLink
            className={LightStyles.menuNavLink}
            activeClassName={LightStyles.menuNavLinkActive}
            to="/register"
          >
            注册
          </NavLink>
        </div>
      </div>
      {props.children}
    </Fragment>
  );
};

export default Layouts;

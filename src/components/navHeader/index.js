import React, { useEffect,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch } from 'antd';
import { ThemeContext } from '@pages/context/context'
import LightStyles from '@styles/lightStyle.less';
import DarkStyles from '@styles/darkStyle.less';

function navHeader(props) {
  const { darkMode, switchDarkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  console.log('navheader', props);
  const onChange = () => {
    switchDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.className = 'dark';
      document.getElementById('root').className = 'dark';
    } else {
      document.body.className = '';
      document.getElementById('root').className = '';
    }
  }, [darkMode]);
  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <NavLink className={Styles.logoNavLink} to="/home/0">
          V2EX
        </NavLink>
      </div>
      <div className="menu">
        <span className={Styles.switchTitle}>夜间模式:</span>
        <Switch
          defaultChecked={false}
          size={'small'}
          onChange={onChange}
          style={{ marginRight: '8px' }}
        />
        <NavLink
          className={Styles.menuNavLink}
          activeClassName={Styles.menuNavLinkActive}
          to="/home/0"
        >
          首页
        </NavLink>
        <NavLink
          className={Styles.menuNavLink}
          activeClassName={Styles.menuNavLinkActive}
          to="/login"
        >
          登录
        </NavLink>
        <NavLink
          className={Styles.menuNavLink}
          activeClassName={Styles.menuNavLinkActive}
          to="/register"
        >
          注册
        </NavLink>
      </div>
    </div>
  );
}

export default navHeader;

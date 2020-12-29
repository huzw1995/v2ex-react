import React, { useEffect, useContext, Fragment } from 'react';
import { NavLink } from 'umi';
import { Switch } from 'antd';
import { ThemeContext } from '@/theme/context'
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@/layouts/darkStyle.less';

const NavHeader: React.FC = (props) => {
    const { darkMode, switchDarkMode } = useContext(ThemeContext)
    let Styles = darkMode ? DarkStyles : LightStyles;
    const onChange = () => {
      switchDarkMode(!darkMode);
    };
    useEffect(() => {
      if (darkMode) {
        document.body.className = 'dark';
        const element = document.getElementById('root') as HTMLElement
        element.className = 'dark';
      } else {
        document.body.className = '';
        const element = document.getElementById('root') as HTMLElement
        element.className = '';
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
};

export default NavHeader;

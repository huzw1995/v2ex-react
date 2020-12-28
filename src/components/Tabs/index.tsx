import React,{ useContext } from 'react';
import { ThemeContext } from '@/theme/context'
import { NavLink } from 'react-router-dom';
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@/layouts/darkStyle.less';

const tabs: React.FC = () => {
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  return (
    <div className={Styles.tabs}>
      <NavLink
        className={Styles.tabNavlink}
        activeClassName={Styles.tabNavlinkActive}
        to="/Home/0"
      >
        最热
      </NavLink>
      <NavLink
        className={Styles.tabNavlink}
        activeClassName={Styles.tabNavlinkActive}
        to="/Home/1"
      >
        最新
      </NavLink>
    </div>
  );
};

export default tabs;

import React, { useEffect, useState, useContext } from 'react';
// import { ThemeContext } from '@pages/context/context'
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@styles/darkStyle.less';
import axios from 'axios';

interface Props {
  topicNumber : number,
  memberNumber : number
}
const siteStats: React.FC<Props> = (props) => {
  
  //   const { darkMode } = useContext(ThemeContext)
  //   let Styles = darkMode ? DarkStyles : LightStyles;
  const { topicNumber, memberNumber } = props
  return (
    <div className={LightStyles.box}>
      <div className={LightStyles.cell}>社区运行状况</div>
      <div className={LightStyles.cell}>
        <div className={LightStyles.row}>
          <div className={LightStyles.topic}>注册会员</div>
          <div className={LightStyles.number}>{memberNumber}</div>
        </div>
        <div className={LightStyles.row}>
          <div className={LightStyles.topic}>主题</div>
          <div className={LightStyles.number}>{topicNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default siteStats;

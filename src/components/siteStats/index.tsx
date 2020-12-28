import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '@/theme/context'
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@/layouts/darkStyle.less';
import axios from 'axios';

interface Props {
  topicNumber : number,
  memberNumber : number
}
const siteStats: React.FC<Props> = (props) => {
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  const { topicNumber, memberNumber } = props
  return (
    <div className={Styles.box}>
      <div className={Styles.cell}>社区运行状况</div>
      <div className={Styles.cell}>
        <div className={Styles.row}>
          <div className={Styles.topic}>注册会员</div>
          <div className={Styles.number}>{memberNumber}</div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.topic}>主题</div>
          <div className={Styles.number}>{topicNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default siteStats;

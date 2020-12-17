import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '@pages/context/context'
import LightStyles from '@styles/lightStyle.less';
import DarkStyles from '@styles/darkStyle.less';
import axios from 'axios';

function siteStats(props) {
  const [topicNumber, setTopicNumber] = useState(0);
  const [memberNumber, setMemberNumber] = useState(0);
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  useEffect(() => {
    axios.get('/api/site/stats').then((response) => {
      setTopicNumber(response.data.topic_max);
      setMemberNumber(response.data.member_max);
    });
  }, []);
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
}

export default siteStats;

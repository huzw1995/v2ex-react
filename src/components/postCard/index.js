import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '@pages/context/context'
import LightStyles from '@styles/lightStyle.less';
import DarkStyles from '@styles/darkStyle.less';
import moment from '@utils/momentZH';
function postCard(props) {
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  return (
    <div className={Styles.postCard}>
      <div className={Styles.title}>
        <h1>{props.title}</h1>
        <NavLink className={Styles.memberLink} to={'/member/' + props.username}>
          {props.username}
        </NavLink>
        <span className={Styles.smallInfo}>
          {' '}
          · {props.created && moment(props.created * 1000).fromNow()}
        </span>
      </div>
      <div className={Styles.content} dangerouslySetInnerHTML={{ __html: props.contentHTML }} />
    </div>
  );
}

export default postCard;

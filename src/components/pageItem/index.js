import React,{ useContext }from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '@pages/context/context'
import LightStyles from '@styles/lightStyle.less';
import DarkStyles from '@styles/darkStyle.less';
import { Avatar, Badge } from 'antd';
import moment from '@utils/momentZH';

function pageItem(props) {
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  return (
    <div className={Styles.pageItem}>
      <div className={Styles.item}>
        <Avatar src={props.avartar} shape={'square'} size={48} />
        <div className={Styles.info}>
          <NavLink className={Styles.title} to={'/topic/' + props.id}>
            {props.title}
          </NavLink>
          <div>
            <span className={Styles.tag}>
              <NavLink to="/" className={Styles.tagLink}>
                {props.nodeName}
              </NavLink>
            </span>
            <span className={Styles.author}>
              <NavLink to={'/member/' + props.userName} className={Styles.authorLink}>
                {props.userName}
              </NavLink>
            </span>
            <span className={Styles.information}>
              &nbsp;•&nbsp; {moment(props.last_modified * 1000).fromNow()} &nbsp;•&nbsp;
              最后回复来自&nbsp;
            </span>
            <span className={Styles.authorLink}>{props.last_reply_by}</span>
          </div>
        </div>
        <div className={Styles.commentCount}>
          <Badge count={props.replies} overflowCount={999} className="site-badge-count-4" />
        </div>
      </div>
    </div>
  );
}

export default pageItem;

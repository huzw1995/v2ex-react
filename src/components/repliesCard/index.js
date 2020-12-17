import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '@pages/context/context'
import LightStyles from '@styles/lightStyle.less';
import DarkStyles from '@styles/darkStyle.less';
import { Avatar, Badge } from 'antd';
import moment from '@utils/momentZH';

function repliesCard(props) {
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles;
  return (
    <div className={Styles.repliesItem}>
      <div className={Styles.comment}>
        <Avatar src={props.avatar} shape={'square'} size={48} />
        <div className={Styles.middle}>
          <span>
            <NavLink to={'/member/' + props.username} className={Styles.replyMemberLink}>
              {props.username}
            </NavLink>
            <span className={Styles.ago}>{moment(props.last_modified * 1000).fromNow()}</span>
            <span style={{ float: 'right' }}>
              <Badge
                count={props.index + 1}
                overflowCount={99999}
                size={'small'}
                className="site-badge-count-4"
              />
            </span>
          </span>
          <div
            className={Styles.replyContent}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default repliesCard;

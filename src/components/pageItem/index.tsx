import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import { ThemeContext } from '@pages/context/context'
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@/pages/darkStyle.less';
import { topicObj } from '@/pages/home/service';
import { Avatar, Badge } from 'antd';
import moment from '@/utils/momentZH';

const pageItem: React.FC = (props: topicObj) => {
  //   const { darkMode } = useContext(ThemeContext)
  //   let Styles = darkMode ? DarkStyles : LightStyles;
  return (
    <div className={LightStyles.pageItem}>
      <div className={LightStyles.item}>
        <Avatar src={props.avartar} shape={'square'} size={48} />
        <div className={LightStyles.info}>
          <NavLink className={LightStyles.title} to={'/topic/' + props.id}>
            {props.title}
          </NavLink>
          <div>
            <span className={LightStyles.tag}>
              <NavLink to="/" className={LightStyles.tagLink}>
                {props.nodeName}
              </NavLink>
            </span>
            <span className={LightStyles.author}>
              <NavLink
                to={'/member/' + props.userName}
                className={LightStyles.authorLink}
              >
                {props.userName}
              </NavLink>
            </span>
            <span className={LightStyles.information}>
              &nbsp;•&nbsp; {moment(props.last_modified * 1000).fromNow()}{' '}
              &nbsp;•&nbsp; 最后回复来自&nbsp;
            </span>
            <span className={LightStyles.authorLink}>
              {props.last_reply_by}
            </span>
          </div>
        </div>
        <div className={LightStyles.commentCount}>
          <Badge
            count={props.replies}
            overflowCount={999}
            className="site-badge-count-4"
          />
        </div>
      </div>
    </div>
  );
};

export default pageItem;

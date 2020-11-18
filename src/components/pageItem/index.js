import React from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'
import { Avatar, Badge } from 'antd'
import moment from '@utils/momentZH'

function pageItem(props){
    return (
        <div className={LightStyles.pageItem}>
           <div className={LightStyles.item}>
                <Avatar src={props.avartar}
                        shape={'square'}
                        size={48}
                />
                <div className={LightStyles.info}>
                    <NavLink className={LightStyles.title} to={'/topic/'+props.id}>{props.title}</NavLink>
                    <div>
                        <span className={LightStyles.tag}>
                            <NavLink to='/register' className={LightStyles.tagLink}>{props.nodeName}</NavLink>
                        </span>
                        <span className={LightStyles.author}>
                            <NavLink to='/register' className={LightStyles.authorLink}>{props.userName}</NavLink>
                        </span>
                        <span className={LightStyles.information}>
                            &nbsp;•&nbsp; {moment(props.last_modified*1000).fromNow()} &nbsp;•&nbsp; 最后回复来自&nbsp; 
                        </span>
                        <span className={LightStyles.authorLink}>
                            {props.last_reply_by}
                        </span>
                    </div>
                </div>
                <div className={LightStyles.commentCount}>
                    <Badge count={props.replies} overflowCount={999} className="site-badge-count-4" />
                </div>
           </div>
        </div>
    )
}

export default pageItem
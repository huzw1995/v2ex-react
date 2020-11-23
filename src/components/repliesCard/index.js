import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'
import { Avatar, Badge } from 'antd'
import moment from '@utils/momentZH'

function repliesCard(props){
    return (
        <div className={LightStyles.repliesItem}>
            <div className={LightStyles.comment}>
                <Avatar src={props.avatar}
                            shape={'square'}
                            size={48}
                />
                <div className={LightStyles.middle}>
                    <span>
                        <NavLink to={'/member/' + props.username} className={LightStyles.replyMemberLink}>{props.username}</NavLink>
                        <span className={LightStyles.ago}>{moment(props.last_modified*1000).fromNow()}</span>
                            <span style={{float:'right'}}><Badge count={props.index+1} overflowCount={99999} size={'small'} className="site-badge-count-4"/></span>
                    </span>
                    <div className={LightStyles.replyContent} dangerouslySetInnerHTML={{__html:props.content}}/>
                </div>
            </div>
        </div>
    )
}

export default repliesCard
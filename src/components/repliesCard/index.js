import React from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'
import { Avatar } from 'antd'
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
                        <NavLink to='/register' className={LightStyles.replyMemberLink}>{props.username}</NavLink>
                        <span className={LightStyles.ago}>2 小时 57 分钟前 via Android</span>
                    </span>
                    <div className={LightStyles.replyContent} dangerouslySetInnerHTML={{__html:props.content}}/>
                </div>
            </div>
        </div>
    )
}

export default repliesCard
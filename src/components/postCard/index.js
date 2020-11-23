import React from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'
import moment from '@utils/momentZH'
function postCard(props){
    return (
        <div className={LightStyles.postCard}>
            <div className={LightStyles.title}>
                <h1>{props.title}</h1>
                <NavLink className={LightStyles.memberLink} to={'/member/' + props.username}>{props.username}</NavLink>
                <span className= {LightStyles.smallInfo}> · {props.created && moment(props.created*1000).fromNow()}</span>
            </div>
            <div className={LightStyles.content} dangerouslySetInnerHTML={{__html:props.contentHTML}}/>
        </div>
    )
}

export default postCard
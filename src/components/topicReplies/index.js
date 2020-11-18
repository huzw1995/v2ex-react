import React,{useEffect, useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import LightStyles from '@styles/globalStyle.less'
import RepliesCard from '@components/repliesCard'
import moment from '@utils/momentZH'
import axios from 'axios'
import topicContext from '@pages/topicDetail/topicContext'

function topicReplies(props){
    const {topicId} = useContext(topicContext)
    const [replyContentArr,setReplyContentArr] = useState([])
    let replyContentObj = {}
    useEffect(()=>{
        axios.get('/api/replies/' + topicId +'?page=1&pagesize=100').then(responce=>{
            responce.data.forEach(item=>{
                replyContentObj.avatar = item.member.avatar_normal
                replyContentObj.username = item.member.username
                replyContentObj.content = item.content_rendered
                replyContentArr.push(replyContentObj)
                replyContentObj = {}
            })
            setReplyContentArr([...replyContentArr])
        })
    },[topicId])
    return (
        <div className={LightStyles.repliesCard}>
            <div className={LightStyles.replyCount}>
                {props.replies} 条回复  •  {props.last_touched && moment(props.last_touched*1000).format().split('T').join(' ')}
            </div>
            {
                replyContentArr.map((item,index)=>{
                    return <RepliesCard key={index} {...item}/>
                })
            }
        </div>
    )
}

export default topicReplies
import React,{ useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import PostCard from '@components/postCard'
import TopicReplies from '@components/topicReplies'
import topicContext from './topicContext'
import { ThemeContext }  from '@pages/context/context'
import LightStyles from '@styles/lightStyle.less'
import DarkStyles from '@styles/darkStyle.less'

function topicDetial(props){
    const [topicContent,setTopicContent] = useState({})
    const [repliesContent,setRepliesContent] = useState({})
    const { darkMode } = useContext(ThemeContext)
    let Styles = darkMode ? DarkStyles : LightStyles
    useEffect(()=>{
        axios.get('/api/topics/' + props.match.params.id).then(response=>{
            topicContent.title = response.data[0].title
            document.title = topicContent.title
            topicContent.username = response.data[0].member.username
            topicContent.contentHTML = response.data[0].content_rendered
            topicContent.created = response.data[0].created
            repliesContent.replies = response.data[0].replies
            repliesContent.last_touched = response.data[0].last_touched
            setTopicContent({...topicContent})
            setRepliesContent({...repliesContent})
        })
    },[props.match.params.id])
    return(
        <topicContext.Provider
            value={{
                topicId:props.match.params.id
            }}
        >
            <div className={Styles.container} style={{flexWrap:'wrap'}}>
                <PostCard {...topicContent}/>
                <TopicReplies {...repliesContent}/>
            </div>
        </topicContext.Provider>
    )
}

export default topicDetial
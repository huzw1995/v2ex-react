import React, { useState, useEffect } from 'react'
import Styles from '@styles/globalStyle.less'
import Tabs from '@components/Tabs'
import axios from 'axios'
import PageItem from '@components/pageItem'

function Home(props){
    const tabItemIdArr = ['/hot','/latest']
    const [content,setContent] = useState([])
    useEffect(()=>{
        document.title = 'v2ex-react'
        axios.get('/api/topics' + tabItemIdArr[props.match.params.id]).then(responce=>{
            let topicArr = []
            let topicObj = {}
            responce.data.forEach(item=>{
                topicObj.avartar = item.member.avatar_normal
                topicObj.title = item.title
                topicObj.nodeName = item.node.title
                topicObj.userName = item.member.username
                topicObj.replies = item.replies
                topicObj.last_modified = item.last_modified
                topicObj.last_reply_by = item.last_reply_by
                topicObj.id = item.id
                topicArr.push(topicObj)
                topicObj = {}
            })
            setContent(topicArr)
        })
    },[props.match.params.id])
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <Tabs/>
                {
                    content.map((item,index)=>{
                        return <PageItem key={index} {...item}/>
                    })
                }
            </div>
            <div className={Styles.rightBar}>
            </div>
        </div>
    )
}

export default Home
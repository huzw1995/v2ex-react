import React, { useState, useEffect, useContext } from 'react'
import LightStyles from '@styles/lightStyle.less'
import DarkStyles from '@styles/darkStyle.less'
import Tabs from '@components/Tabs'
import { ThemeContext } from '@pages/context/context'
import axios from 'axios'
import PageItem from '@components/pageItem'
import SiteStats from '@components/siteStats'
import throttle from '@utils/throttle'

function Home(props){
    const tabItemIdArr = ['/hot','/latest']
    const [content,setContent] = useState([])
    const [width, setWidth] = useState(window.innerWidth)
    const { darkMode } = useContext(ThemeContext)
    let Styles = darkMode ? DarkStyles : LightStyles
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
    useEffect(()=>{
        const handleWindowResize = () => throttle(setWidth(window.innerWidth),500)
        window.addEventListener('resize',handleWindowResize)
        return () => window.removeEventListener('resize',handleWindowResize)
    },[])
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
            {width < 857 ? <div/> : <div className={Styles.rightBar}>
                <SiteStats/>
            </div>
            }
        </div>
    )
}

export default Home

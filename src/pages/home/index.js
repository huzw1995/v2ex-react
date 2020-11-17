import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Styles from '@styles/globalStyle.less'
import Tabs from '@components/Tabs'
import axios from 'axios'
import PageItem from '@components/pageItem'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function initNprogress(){
    // axios请求拦截器
    axios.interceptors.request.use(
        config => {
            console.log('start')
            NProgress.start() // 设置加载进度条(开始..)
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )
  // axios响应拦截器
  axios.interceptors.response.use(
        function(response) {
            console.log('end')
            NProgress.done() // 设置加载进度条(结束..)
            return response
        },
        function(error) {
            return Promise.reject(error)
        }
    )
}

function Home(props){
    const tabItemIdArr = ['/hot','/latest']
    const [content,setContent] = useState([])
    initNprogress()
    useEffect(()=>{
        axios.get('/api/topics' + tabItemIdArr[props.match.params.id]).then(responce=>{
            let topicArr = []
            let topicObj = {}
            responce.data.forEach(item=>{
                topicObj.avartar = item.member.avatar_normal
                topicObj.title = item.title
                topicObj.nodeName = item.node.title
                topicObj.userName = item.member.username
                topicObj.replies = item.replies
                topicArr.push(topicObj)
                topicObj = {}
            })
            setContent(topicArr)
            console.log(responce.data)
            console.log(topicArr)
        })
    },[props.match.params.id])
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <Tabs/>
                {
                    content.map(item=>{
                        return <PageItem {...item}/>
                    })
                }
            </div>
            <div className={Styles.rightBar}>
            </div>
        </div>
    )
}

export default withRouter(Home)
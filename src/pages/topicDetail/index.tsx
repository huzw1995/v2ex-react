import React,{ useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { Dispatch, Loading } from 'umi'
import { connect } from 'dva'
import PostCard from '@/components/postCard'
import TopicReplies from '@/components/topicReplies'
import topicContext from './topicContext'
import { Data } from './model'
import { ThemeContext }  from '@/theme/context'
import LightStyles from '@/layouts/lightStyle.less'
import DarkStyles from '@/layouts/darkStyle.less'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

type Props = { 
    initialContent : {
        title: string, 
        username: string, 
        contentHTML: string,
        created: string | number,
        replies: string | number,
        last_touched: string | number
    },
    match:any,
    dispatch:Dispatch,
    topicDetail:Data,
    topicDetailLoading: Boolean
};

function topicDetail(props:Props){
    const { dispatch, topicDetailLoading} = props
    const { topicContent, replyContent } = props.topicDetail
    const getTopicDetail = (id:number) => {
        dispatch({
            type:'topicDetail/getRemote',
            payload:{
                id
            }
        })
    }
    const { darkMode } = useContext(ThemeContext)
    let Styles = darkMode ? DarkStyles : LightStyles
    useEffect(()=>{
        getTopicDetail(props.match.params.id)
    },[props.match.params.id])
    useEffect(()=>{
        if(!topicDetailLoading){
            NProgress.done()
        }
    },[topicDetailLoading])
    useEffect(()=>{
        NProgress.start()
    },[])
    return(
        <topicContext.Provider
            value={{
                topicId:props.match.params.id
            }}
        >
            <div className={Styles.container} style={{flexWrap:'wrap'}}>
                <PostCard {...topicContent}/>
                <TopicReplies {...replyContent}/>
            </div>
        </topicContext.Provider>
    )
}

const mapStateToProps = ({ topicDetail, loading }:{ topicDetail: Data, loading: Loading }) => {
    return { topicDetail, topicDetailLoading:loading.models.topicDetail}
}

export default connect(mapStateToProps)(topicDetail)
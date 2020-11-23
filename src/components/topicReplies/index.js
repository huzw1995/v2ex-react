import React,{useEffect, useContext, useState, useMemo, useCallback} from 'react';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd'
import LightStyles from '@styles/globalStyle.less'
import RepliesCard from '@components/repliesCard'
import _ from 'lodash'
import moment from '@utils/momentZH'
import axios from 'axios'
import topicContext from '@pages/topicDetail/topicContext'

function topicReplies(props){
    const {topicId} = useContext(topicContext)
    const [replyContentArr,setReplyContentArr] = useState([])
    const [currentPage,setPage] = useState(1)
    const total = useMemo(()=>{
        return replyContentArr.length
    })
    const currentReplyContentArr = useMemo(()=>{
        let currentReplyContentArr = replyContentArr.slice((currentPage-1)*60,(currentPage-1)*60 + 59)
        return currentReplyContentArr
    })
    const getIndex = useCallback((item)=>{
        return replyContentArr.findIndex(finditem=>_.isEqual(finditem,item))
    })
    const onChange = (page)=>{
        setPage(page)
    }

    const memberLinkHashConverter = () =>{
        let aTags = document.querySelectorAll('.' + LightStyles.replyContent + ' > a')
        aTags.forEach(item=>{
            let href = item.getAttribute('href')
            if(href.substr(0,7)==='/member'){
                item.setAttribute('href','/#' + href)
            }
        })
    }

    useEffect(()=>{
        let replyContentObj = {}
        axios.get('/api/replies/' + topicId +'?page=1&pagesize=60').then(responce=>{
            responce.data.forEach(item=>{
                replyContentObj.avatar = item.member.avatar_normal
                replyContentObj.username = item.member.username
                replyContentObj.content = item.content_rendered
                replyContentObj.last_modified = item.last_modified
                replyContentArr.push(replyContentObj)
                replyContentObj = {}
            })
            setReplyContentArr([...replyContentArr])
            memberLinkHashConverter()
        })
    },[topicId])

    useEffect(()=>{
        memberLinkHashConverter()
    },[currentPage])

    return (
        <div className={LightStyles.repliesCard}>
            <div className={LightStyles.replyCount}>
                {props.replies} 条回复  •  {props.last_touched && moment(props.last_touched*1000).format().split('T').join(' ')}
            </div>
            {
                currentReplyContentArr.map((item,index)=>{
                    return <RepliesCard key={index} index={getIndex(item)} {...item}/>
                })
            }
            <Pagination showQuickJumper 
                        showSizeChanger={false} 
                        showTotal={()=>`共 ${total} 条`} 
                        total={total}
                        current={currentPage}
                        defaultCurrent={1}
                        defaultPageSize={60}
                        onChange={onChange}
                        />
        </div>
    )
}

export default topicReplies
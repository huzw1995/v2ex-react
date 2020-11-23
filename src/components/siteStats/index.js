import React, { useEffect, useState } from 'react';
import LightStyles from '@styles/globalStyle.less'
import axios from 'axios'

function siteStats(props){
    const [topicNumber,setTopicNumber] = useState(0)
    const [memberNumber,setMemberNumber] = useState(0)
    useEffect(()=>{
        axios.get('/api/site/stats').then(response=>{
            setTopicNumber(response.data.topic_max)
            setMemberNumber(response.data.member_max)
        })
    },[])
    return(
        <div className={LightStyles.box}>
            <div className={LightStyles.cell}>
                社区运行状况
            </div>
            <div className={LightStyles.cell}>
                <div className={LightStyles.row}>
                    <div className={LightStyles.topic}>
                        注册会员
                    </div>
                    <div className={LightStyles.number}>
                        {topicNumber}
                    </div>
                </div>
                <div className={LightStyles.row}>
                    <div className={LightStyles.topic}>
                        主题
                    </div>
                    <div className={LightStyles.number}>
                        {memberNumber}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default siteStats;
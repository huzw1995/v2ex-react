import React,{useEffect, useState} from 'react';
import LightStyles from '@styles/lightStyle.less'
import { connect } from 'react-redux'
import DarkStyles from '@styles/darkStyle.less'
import { Avatar } from 'antd'
import moment from '@utils/momentZH'
import axios from 'axios'

function MemberDetail(props){
    const [avatar,setAvatar] = useState(null)
    const [username,setUsername] = useState('')
    const [id,setId] = useState(0)
    const [created,setCreated] = useState(null)
    let Styles = props.switch.darkMode ? DarkStyles : LightStyles
    useEffect(()=>{
        axios.get('/api/members/username/' + props.match.params.id).then(response=>{
            setAvatar(response.data.avatar_large)
            setUsername(response.data.username)
            setId(response.data.id)
            setCreated(response.data.created)
        })
    },[])
    return (
        <div className={Styles.memberContainer}>
            <div className={Styles.box}>
                <Avatar src={avatar}
                            shape={'square'}
                            size={82}
                />
                <div className={Styles.content}>
                    <h1>{username}</h1>
                    <div>V2EX 第 {id} 号会员</div>
                    <div id={Styles.createdTime}>加入于 {created && moment(created*1000).format().split('T').join(' ')}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        switch:state.switchDarkMode
    }
}

export default connect(mapStateToProps,null)(MemberDetail)
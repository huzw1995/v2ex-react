import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Switch } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchDarkMode } from '@redux/actions'
import classnames from 'classnames'
import LightStyles from '@styles/lightStyle.less'
import DarkStyles from '@styles/darkStyle.less'

function navHeader(props){
    console.log('navheader',props)
    const onChange = ()=>{
        console.log(props.switch)
        props.userActions.switchDarkMode(!props.switch.darkMode)
    }
    useEffect(()=>{
        if(props.switch.darkMode){
            document.body.className = 'dark'
            document.getElementById('root').className = 'dark'
        }else{
            document.body.className = ''
            document.getElementById('root').className = ''
        }
    },[props.switch.darkMode])
    return (
        <div className={LightStyles.header}>
            <div className={LightStyles.logo}>
                <NavLink className={LightStyles.logoNavLink} to='/home/0'>V2EX</NavLink>
            </div>
            <div className="menu">
                <span className={LightStyles.switchTitle}>夜间模式:</span><Switch defaultChecked={false} size={'small'} onChange={onChange} style={{marginRight:'8px'}}/>
                <NavLink className={LightStyles.menuNavLink} activeClassName={LightStyles.menuNavLinkActive} to='/home/0'>首页</NavLink>
                <NavLink className={LightStyles.menuNavLink} activeClassName={LightStyles.menuNavLinkActive} to='/login'>登录</NavLink>
                <NavLink className={LightStyles.menuNavLink} activeClassName={LightStyles.menuNavLinkActive} to='/register'>注册</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        switch:state.switchDarkMode
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        userActions:bindActionCreators({switchDarkMode},dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(navHeader)
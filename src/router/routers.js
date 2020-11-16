import React,{Fragment} from 'react';
import { Route, Switch, Redirect, HashRouter} from 'react-router-dom'
import Navheader from '@components/navHeader'
import Home from '@pages/home'
import Login from '@pages/login'
import Register from '@pages/register'
import '@styles/globalStyle.less'
import loadable from '@utils/loadable';

// const Login = loadable(()=> import("@pages/login"))

export default function Routers() {
  return (
    <HashRouter>
      <Navheader/>
        <Switch>
            <Route exact path='/' render={()=>{
              return <Redirect to='/home'/>
            }}></Route>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
        </Switch>
    </HashRouter>
  );
}

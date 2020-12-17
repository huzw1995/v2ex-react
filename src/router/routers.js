import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Navheader from '@components/navHeader';
import Home from '@pages/home';
import Login from '@pages/login';
import Register from '@pages/register';
import Detail from '@pages/topicDetail';
import Member from '@pages/memberDetail';
import '@styles/lightStyle.less';
import initNprogress from '@utils/nProgress';
import loadable from '@utils/loadable';

// const Login = loadable(()=> import("@pages/login"))

export default function Routers() {
  initNprogress();
  return (
    <HashRouter>
      <Navheader />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home/0" />;
          }}
        ></Route>
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/topic/:id" component={Detail} />
        <Route exact path="/member/:id" component={Member} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </HashRouter>
  );
}

/* eslint-disable */
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import loadbale from '../utils/loadable';

const NotFind = loadbale(() => import('../components/404'));

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/1' render={() => <div>111</div>}></Route>
        <Route exact path='/2' render={() => <div>222</div>}></Route>
        <Route exact path='/404' component={NotFind}></Route>
        <Route render={() => <Redirect to='/404' />}></Route>
      </Switch>
    </HashRouter>
  );
};

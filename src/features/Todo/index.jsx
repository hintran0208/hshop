import React from 'react';
import { Route, Switch } from 'react-router';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <Switch>
        <Route path='/todos' component={ListPage} exact />
        <Route path='/todos/:todoId' component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;

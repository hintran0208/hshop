import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TodoFeature from './features/Todo';
import AlbumsFeature from './features/Album';
import { Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      Header
      <p>
        <NavLink to='/todos' activeClassName='active-menu'>
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to='/albums'>Albums</NavLink>
      </p>
      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/posts/:postId' exact />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumsFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;

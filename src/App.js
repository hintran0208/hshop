import Header from 'components/Header';
import CartFeature from 'features/Cart';
import ProductFeature from 'features/Product';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import NotFound from './components/NotFound';
import AlbumsFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/" to="/products" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        {/* <Route path="/" component={CounterFeature} exact /> */}
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumsFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

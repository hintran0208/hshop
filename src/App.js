import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TodoFeature from './features/Todo';
import AlbumsFeature from './features/Album';
import { Link, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumsFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;

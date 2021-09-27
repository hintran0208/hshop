import React from 'react';
import { Route } from 'react-router';
import TodoFeature from './features/Todo';
import AlbumsFeature from './features/Album';

function App() {
  return (
    <div className='App'>
      Header
      <Route path='/todos' component={TodoFeature} />
      <Route path='/albums' component={AlbumsFeature} />
      Footer
    </div>
  );
}

export default App;

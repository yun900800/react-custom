import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function ReduxApp() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Example</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default ReduxApp;
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import makeStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = makeStore(preloadedState);
    delete window.currentUser;
  } else {
    store = makeStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

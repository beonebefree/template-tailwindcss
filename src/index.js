import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { router } from './router/createRouter';
import { store } from './store/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>  
    
);
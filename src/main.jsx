import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//Components
import App from './App';

//Redux
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './Redux/Reducers/itemsReducer';
import cartReducer from './Redux/Reducers/cartReducer';
import thunk from 'redux-thunk';

//Redux Reducers

const store = configureStore({
  reducer :{
    items: itemsReducer,
    cart: cartReducer,
  },
  thunk,
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ Provider>
  </React.StrictMode>
)

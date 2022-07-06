import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      {/* <MuiThemeProvider> */}
      <AppRouter />
      {/* </MuiThemeProvider> */}
    </Provider>
  );
}




export default App;



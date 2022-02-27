import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CountriesContextProvider} from "./store/countries-context";
import LoadingIndicator from "./component/loadingIndecator/LoadingIndecator";

ReactDOM.render(
  <CountriesContextProvider>
      <React.StrictMode>
        <App/>
        <LoadingIndicator/>
      </React.StrictMode>
  </CountriesContextProvider>,
  document.getElementById('root')
);
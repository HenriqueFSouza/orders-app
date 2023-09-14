import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '../src/pages/styles/globalStyle'

import MyRoutes from './routes';


ReactDOM.render(
    <>
    <MyRoutes/> <GlobalStyle/>
    </>,
  document.getElementById('root')
);



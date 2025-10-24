import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import bootstrap from 'bootstrap';

import  AppRoutes  from './appRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component{
  render(){
    return(
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    );
  }
}
root.render(<App />);

import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';


import  Routes  from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component{
  render(){
    return(
      <div>
          <Routes />
      </div>
    );
  }
}
root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './componentes/Header';
import Principal from './componentes/Principal';
import About from './componentes/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
    <Principal/>
    <About/>
    <Cuadros/>
    
    


  </React.StrictMode>
);




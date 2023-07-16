import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './componentes/Header';
import Principal from './componentes/Principal';
import About from './componentes/About';
import Cuadros from './componentes/Cuadros';
import Dibujos from './componentes/Dibujos';
import Work from './componentes/Work';
import DibujoYTitulo from './componentes/DibujoYTitulo';
import Redes from './componentes/Redes';
import Footer from './componentes/Footer';
import Formulario from './componentes/Formulario';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
    <Principal/>
    <About/>
    <Cuadros/>
    <Dibujos/>
    <Work/>
    <DibujoYTitulo/>
    <Redes/>
    
    <Footer/>

    
    


  </React.StrictMode>
);




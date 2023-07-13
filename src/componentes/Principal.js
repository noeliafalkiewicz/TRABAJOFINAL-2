import Header from './Header'
import './Principal.css'
import mancha from './mancha-rosada-entera.jpg'
 
function Principal () {

    return(
        <div>
            
         <section class="alert alert-primary" role="alert">
              <Header/>
              <div className='contenedorPrincipal'>
                <div className='contenedorSecundario'>
                    <h1>
                     Hola <br/>
                     Soy Nhoelya
                    </h1>
                    <h3>Desarrolladora Web</h3>
                    <button class="btn btn-warning">Hire me</button>
                </div>
                <img src={mancha} className='manchaGrande' alt="mancha"></img>   
              </div>
              
         </section>
        
        </div>
        
       
        
        
        

    )
}

export default Principal
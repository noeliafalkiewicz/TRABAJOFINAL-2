import Header from './Header'
import './Principal.css'
import mancha from './foto1-modificada.png'


 
function Principal () {

    return(
        
        <div >
           
              <section class="border border-white alert      alert-primary shadow-lg p-3 mb-5 bg-body-tertiary rounded" role="alert">
                 <Header/>
                 <div className='contenedorPrincipal'>
                     <div className='contenedorSecundario'>
                          <h1 className='hola'>
                               Hola <br/>
                               Soy Nhoelya
                          </h1>
                          <h3 className='noe'>Desarrolladora Web
                          </h3>
                          <button class="btn btn-warning">Contratar</button>
                      </div>
                      <img src={mancha} className='manchaGrande' alt="mancha"></img>   
                 </div>
              </section>
             
        </div>
        
        
        
        
       

    )
}

export default Principal
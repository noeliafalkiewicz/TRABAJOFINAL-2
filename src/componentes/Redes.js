import './Redes.css'
import whatsapp from './whatsapp.png'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import './Formulario'
import Formulario from './Formulario'

function Redes () {

    return (

        <div className='contenedorRedesyFormulario'>
            <div className='bloque'>
               <div className='datos'>
                   <img className='log' src={whatsapp} ></img>
                   <p className='info'><strong>+12345678910</strong></p>
                </div>
                <div className='datos'>
                     <img className='log' src={facebook} ></img>
                     <p className='info'><strong>Regina Falkiewicz</strong></p>
                </div>
                <div className='datos'>
                   <img className='log' src={linkedin} ></img>
                   <p className='info'><strong>Noelia Falkiewicz</strong></p>
                </div>
                <div className='datos'>
                   <img className='log' src={instagram} ></img>
                   <p className='info'><strong>@noilita_</strong></p>
                </div>
           </div>
           <Formulario/>
        </div>

        
    )
}

export default Redes
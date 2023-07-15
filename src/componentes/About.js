import './About.css'
import mancharosa from './mancharosa.png'
import pajaroazul from './pajaroazul.png'


function About () {
    return (
        <div className='encabezado'>
           <box className='dibujos'>
              <img className='manchaRosa' src={mancharosa}></img>
              <img className='pajaroAzul' src={pajaroazul}></img>
           </box>  

          <div className='About'>
              <h4 className='titulo'>Acerca de mi</h4>
              <p>
                  Un desarrollador web materializa en formato virtual  esas ideas <br/> que  estan dando vueltas en la  cabeza<br/> de alguien
              </p>

          </div>

        </div>
        
    )
}

export default About
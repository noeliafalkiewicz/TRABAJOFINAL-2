import './Dibujos.css'
import pajarorosa from './pajarorosa.png'
import manchaazul from './manchaazul.png'

function Dibujos () {

    return (
         
        <div className='imagenes'>
            
            <img className='manchaazul' src={manchaazul} ></img>
            <img className='pajarorosa' src={pajarorosa} ></img>
        </div>

    )
}

export default Dibujos
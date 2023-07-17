import { useState } from 'react'
import './Formulario.css'
import React from 'react'
import mancharosaformulario from './mancharosa.png'





function Formulario (){

    
return (
    <>
        <div className='row my-5 justify-content-md-center'>
            <div className='formulario shadow-sm p-1 mb-3 bg-body-tertiary rounded'>
                <form className='contenidoformulario'>
                    <div className='form-group'>
                        <label htmlFor="nombre"></label>
                        <input className='input border border-primary-subtle rounded-3' type='text' placeholder='Nombre/Compañia'></input>
                   </div>
                   <div className='form-group'>
                        <label htmlFor="email"></label>
                        <input className='input border border-primary-subtle rounded-3' type='text' placeholder='Email'></input>
                   </div>
                   <div className='form-group'>
                        <label htmlFor="nombre"></label>
                        <textarea className='input texto border border-primary-subtle rounded-3' type='text' placeholder='Deja tu mensaje...'></textarea>
                   </div>
                   <img className='mancharosaformulario' src={mancharosaformulario}></img>
                   <button class="boton btn btn-warning"><strong>Enviar mensaje</strong></button>
                   <p className='comentario'>Te respondere dentro de las 24 hs</p>
                 
               </form>
           </div>
        </div>
        
    </> 

    )


}

export default Formulario
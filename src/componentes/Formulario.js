import { useState } from 'react'
import './Formulario.css'
import React from 'react'
import mancharosaformulario from './mancharosa.png'


function Formulario (){
    const [nombre, setNombre]=useState('')
    const [email, setEmail]=useState('')
    const [mensaje, setMensaje]=useState('')
    
    function actualizaNombre(event){
        setNombre(event.target.value);
    }

    function actualizaEmail(event){
        setEmail(event.target.value);
    }

    function actualizaMensaje(event){
        setMensaje(event.target.value);
    }

    function enviarDatos(event){
        event.preventDefault()    
    }


   
return (
    <>
        <div className='row my-5 justify-content-md-center'>
            <div className='formulario shadow-sm p-1 mb-3 bg-body-tertiary rounded'>
                <form action='https://formsubmit.co/noeliafalkiewicz@email.com" method="POST' className='contenidoformulario'>
                    <div className='form-group'>
                        <label htmlFor="nombre"></label>
                        <input className='input border border-primary-subtle rounded-3' type='text' placeholder='Nombre/Compañia' value={nombre} name='nombre' onChange={actualizaNombre} ></input>
                   </div>
                   <div className='form-group'>
                        <label htmlFor="email"></label>
                        <input className='input border border-primary-subtle rounded-3' type='email' placeholder='Email' value={email} name='email' onChange={actualizaEmail}></input>
                   </div>
                   <div className='form-group'>
                        <label htmlFor="nombre"></label>
                        <textarea className='input texto border border-primary-subtle rounded-3' type='text' placeholder='Deja tu mensaje...' value={mensaje} name='mensaje' onChange={actualizaMensaje}></textarea>
                   </div>
                   <img className='mancharosaformulario' src={mancharosaformulario}></img>

                   <button onClick={enviarDatos} class="boton btn btn-warning"><strong>Enviar mensaje</strong></button>

                   <p className='comentario'>Te respondere dentro de las 24 hs</p>
                 
               </form>
           </div>
        </div>
        
    </> 

    )
}

export default Formulario
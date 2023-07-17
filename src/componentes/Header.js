import './Header.css'
import logo from './logo.png'
import menu from './menuHamburguesa.svg'

function Header () {
    return (
        
        <header class="alert header" role="alert">
            
            <div className='logoContenedor shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-circle'>
               <img src={logo} className='logo' ></img> 
            </div>
            <box className='box'>
               <img src={menu} className='menu'></img>  
            </box>
            <nav className='nav'>
                <ul class="nav justify-content-end">
                     <li class="nav-item">
                       <a class="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#">Inicio</a>
                     </li>
                    <li class="nav-item">
                       <a class="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#">Acerca de</a>
                    </li>
                    <li class="nav-item">
                       <a class="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#">Trabajos</a>
                    </li>
                    <li class="nav-item">
                       <a class="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#'>Contacto</a>
                    </li>
               </ul>
            </nav>

        </header> 
    )
}

export default Header
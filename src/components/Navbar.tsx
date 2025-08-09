import { Link } from 'react-router-dom';
import logo from '../assets/logo-fma-blanco.png'
import Menu from "../functions/Menu";
import NavLinks from "./nav/NavLinks";

function NavBar() {
    return <header className='w-auto sticky inset-x-0 top-0 z-4 bg-[#000e] p-0 md:py-6 shadow-md shadow-black'>
        <nav>
            <div className='md:hidden'>
                <button id='menu-btn' onClick={Menu} className='flex p-6 flex-col gap-1 mx-3'>
                    <div className="w-[25px] h-[2px] bg-gray-300"></div>
                    <div className="w-[15px] h-[2px] bg-gray-300"></div>
                    <div className="w-[4px] h-[2px] bg-gray-300"></div>
                </button>
                <ul id='mobile-ul' className='backdrop-blur-sm absolute z-1 top-0 -left-0 bg-black/40 flex flex-col gap-7 justify-center h-screen text-2xl text-gray-300 w-0 overflow-hidden duration-500'>
                    <button onClick={Menu} className='absolute -space-y-0.5 top-0 -right-0 p-5'>
                        <svg className='w-7 fill-gray-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
                        </svg>
                    </button>
                    <NavLinks apartado='/' text='Inicio' clases='text-gray-200' />
                    <NavLinks apartado='#sobrenosotros' text='Sobre nosotros' clases='text-gray-200' />
                    <NavLinks apartado='/categorias' text='Categorias' clases='text-gray-200' />
                    <NavLinks apartado='/carreras' text='Últimas carreras' clases='text-gray-200' />
                    <NavLinks apartado='#contacto' text='Contacto' clases='text-gray-200' />
                </ul>
            </div>
            <ul className='hidden md:flex items-center md:justify-between lg:justify-around'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="" className='ml-5 w-full max-w-[150px] drop-shadow-fma-blue transition-all duration-400' />
                    </Link>
                </div>
                <div className='flex justify-center gap-5 text-lg font-medium mr-10'>
                    <NavLinks apartado='#sobrenosotros' text='Sobre nosotros' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
                    <NavLinks apartado='/categorias' text='Categorías' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
                    <NavLinks apartado='/carreras' text='Últimas carreras' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
                    <NavLinks apartado='#contacto' text='Contacto' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
                </div>
            </ul>
        </nav>
    </header>;
}

export default NavBar;
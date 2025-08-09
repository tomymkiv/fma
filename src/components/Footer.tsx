import NavLinks from "./nav/NavLinks";

function Footer() {
    const year = new Date().getFullYear();

    return <footer className='flex flex-col items-center justify-center gap-5 p-10 bg-gradient-to-b from-[#090909] to-[#222]'>
        <ul className='hidden sm:flex items-center flex-wrap justify-center gap-10 text-gray-300 font-medium'>
            <NavLinks apartado='/' text='Inicio' clases='!p-3 text-center' />
            {/* <NavLinks apartado='#sobrenosotros' text='Sobre nosotros' clases='!p-3 text-center' /> */}
            <NavLinks apartado='/categorias' text='Categorías' clases='!p-3 text-center' />
            <NavLinks apartado='/carreras' text='Últimas carreras' clases='!p-3 text-center' />
            {/* <NavLinks apartado='#contacto' text='Contacto' clases='!p-3 text-center' /> */}
        </ul>
        <p className='text-sm font-medium text-gray-300'>Forza Motorsport Argentina - {year}</p>
    </footer>
}

export default Footer;
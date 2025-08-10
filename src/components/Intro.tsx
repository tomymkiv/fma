import { useEffect, useState } from "react";
import logo from '../assets/logo-fma-blanco.png'

function Intro() {
    const [logoClass, setLogoClass] = useState({
        opacity: 0,
        scale: 1,
    });
    const [loaderClass, setLoaderClass] = useState({
        opacity: 0,
    });
    const [containerBackground, setContainerBackground] = useState('hidden'); // inicialmente la pantalla estara oculta, aunque cambia casi al instante
    const [intro, setIntro] = useState(true);

    useEffect(() => {
        // si la intro no fue vista anteriormente, la muestro
        if (sessionStorage.getItem('intro') !== '1') {
            setContainerBackground('bg-black');
            document.body.classList.add('overflow-hidden');
            setTimeout(() => {
                setLogoClass({
                    opacity: 1,
                    scale: 1,
                });
            }, 500);

            setTimeout(() => { //primer efecto a los 3s
                setLoaderClass({
                    opacity: 1
                })
                setTimeout(() => { // siguiente efecto a los 5s
                    setLoaderClass({
                        opacity: 0
                    })
                    setTimeout(() => { // tercer efecto a los 6s
                        setLogoClass({
                            opacity: 0,
                            scale: 25,
                        });

                        setContainerBackground('bg-transparent');

                        setTimeout(() => { // ultimo efecto a los 9.3s (final)
                            sessionStorage.setItem('intro', '1') // una vez vi la intro, lo seteo en 1 para que no vuelva a aparecer durante la sesion
                            setIntro(false);
                            setContainerBackground('hidden');
                            document.body.classList.remove('overflow-hidden');
                        }, 2300);
                    }, 1000);
                }, 2000)
            }, 3000);
        }
    }, [])

    return <>
        {intro ? <div className={'fixed z-5 h-screen w-screen flex flex-col gap-8 items-center justify-center text-gray-200 transition-background duration-2300 ease ' + containerBackground}>
            <img
                src={logo}
                alt="Logo FMA"
                className='min-w-[100px] max-w-3xs w-full transition-scale ease duration-2300 opacity-0 mx-2'
                style={logoClass}
            />
            <span className="loader opacity-0 transition-opacity duration-1000 ease animate-spin" style={loaderClass}></span>
        </div>
            : ''
        }
    </>

}

export default Intro;
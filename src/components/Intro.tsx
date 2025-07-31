import { useEffect, useRef } from "react";

function Intro() {
    const logoRef = useRef(null);
    const loaderRef = useRef(null);
    const containerRef = useRef(null);


    useEffect(() => {
        if (logoRef.current) { // current me sirve para detectar el elemento al que estoy haciendo referencia
            setTimeout(() => {
                logoRef.current.style.opacity = 1
            }, 500);
        }
    }, []);
    document.body.classList.add('overflow-hidden')
    console.log(document.body)
    useEffect(() => {
        setTimeout(() => {
            if (loaderRef.current && containerRef.current) { // Primer efecto a los 4s
                loaderRef.current.style.opacity = 1;
                setTimeout(() => { // siguiente efecto a los 6s
                    loaderRef.current.style.opacity = 0;
                    setTimeout(() => { // tercer efecto a los 7s
                        logoRef.current.style.scale = 25;
                        logoRef.current.style.opacity = 0;
                        containerRef.current.classList.replace('bg-black', 'bg-transparent');
                        setTimeout(() => { // ultimo efecto a los 10s (desaparece la imagen)
                            containerRef.current.remove();
                            document.body.classList.remove('overflow-hidden');
                        }, 3000);
                    }, 1000);
                }, 2000)
            }
        }, 4000);
    }, [])
    return <div ref={containerRef} className='absolute h-screen w-screen flex flex-col gap-8 items-center justify-center bg-black text-gray-200 transition-background duration-2300 ease'>
        <img
            ref={logoRef} // apunto a este elemento
            src="/src/assets/logo-fma.png"
            alt="Logo FMA"
            className='min-w-[100px] max-w-3xs w-full transition-scale ease duration-2300 opacity-0 mx-2'
        />
        <span className="loader opacity-0 transition-opacity duration-1000 ease animate-spin" ref={loaderRef}></span>
    </div>;
}

export default Intro;
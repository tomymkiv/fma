// Desktop carousel


import { useState, type ReactNode } from "react";

interface Props {
    children: Array<ReactNode>, // es un arreglo de nodos
}

function Carousel(props: Props) {
    const [curr, setCurr] = useState(0);
    const { children } = props;

    if (!children) return;

    const prevSlide = () => setCurr(curr => curr === 0 ? children.length - 1 : curr - 1)
    const nextSlide = () => setCurr(curr => curr === children.length - 1 ? 0 : curr + 1)

    return (
        <div className="overflow-hidden flex flex-col relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[550px] xl:max-w-[800px]">
            {
                innerWidth < 768 ? <h2 className="text-lg mb-3">
                    Deslizá para ver más videos
                </h2> : ''
            }
            <div className="flex relative">
                <button onClick={prevSlide} className="hidden md:block absolute left-0 z-3 top-[45%] p-2.5 bg-[#0007] hover:bg-[#000b] transition-background duration-400 cursor-pointer ease-in-out">
                    <svg className="size-8 fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z" /></svg>
                </button>
                <div className="relative snap-x snap-mandatory overflow-x-scroll md:overflow-visible flex transition-transform ease-in duration-600 w-full" style={{
                    transform: `translateX(-${curr * 100}%)`
                }}>{children}
                </div>
                <button onClick={nextSlide} className="hidden md:block absolute right-0 z-2 top-[45%] p-2.5 bg-[#0007] hover:bg-[#000b] transition-background duration-400 cursor-pointer ease-in-out">
                    <svg className="size-8 fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" /></svg>
                </button>
            </div>
            { // en pantallas de movil se vera algo diferente a escritorio
                innerWidth < 768 ?
                    <div className="mt-5 md:hidden">
                        <h2>Haz click en la imagen para ver el video.</h2>
                    </div>
                    :
                    <div className="hidden md:block mt-5">
                        <div className="flex items-center justify-center gap-2">
                            {children.map((_, i) => (
                                <div key={i} className={`
                            transition-all size-1.5 bg-gray-200 rounded-full
                            ${curr === i ? 'p-1.5' : 'bg-opacity-50'}
                            `} />
                            ))}
                        </div>
                    </div>
            }
        </div>
    )
}



export default Carousel;
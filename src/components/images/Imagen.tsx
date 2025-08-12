import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    href: string;
    enlace: string;
    clases?: string;
}

function Imagen(props: Props) {
    const { href, enlace, clases } = props;
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (props.href.includes('categorias')) {
            setHover(true)
        }
    }, [])

    return <Link to={href} className="relative">
        {hover ? <div className="hidden lg:flex absolute bg-white/75 opacity-0 transition-opacity duration-400 hover:opacity-75 rounded-lg w-full h-full text-gray-800 text-xl lg:text-3xl items-center justify-center">
            Ver resultados
        </div>
            :
            ''
        }
        <img src={enlace} alt="Imagen" className={'rounded-lg ' + clases} />
    </Link>
}

export default Imagen;
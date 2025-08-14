import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

type Pilotos = {
    imagenLMH: string,
    imagenGT3: string,
}
function ResultadosMCCA() {
    const [categorias, setCategorias] = useState<Pilotos[]>([])
    // Informacion para tablas (campeonatos activos)
    useEffect(() => {
        fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Imagenes")
            .then(res => res.json())
            .then(data => {
                let imagenesCategorias = [];

                imagenesCategorias = data.map((pilotos: any) => ({
                    imagenLMH: pilotos.LMH,
                    imagenGT3: pilotos.GT3
                }))

                setCategorias(imagenesCategorias);
            });
    }, [])

    return <>
        <NavBar />
        <div className="flex flex-col my-35 text-sm lg:text-lg md:m-10 items-center gap-5 justify-center mx-2 text-gray-300">
            <h2 className="text-4xl font-medium">Resultados de LMH</h2>
            <table className="table-auto overflow-scroll">
                <tbody>
                    {categorias.map((piloto, index) => (
                        <tr key={index}>
                            <td>
                                <img src={piloto.imagenLMH} className="w-[739px]" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-4xl font-medium mt-20">Resultados de GT3</h2>
            <table className="table-auto overflow-scroll">
                <tbody>
                    {categorias.map((piloto, index) => (
                        <tr key={index}>
                            <td>
                                <img src={piloto.imagenGT3}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
        <Footer />
    </>
}

export default ResultadosMCCA;
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
type Pilotos = {
    gamertag: string,
    auto: string,
    // fecha1: string,
    // fecha2: string,
    // fecha3: string,
    // fecha4: string,
    // fecha5: string,
    // fecha6: string,
    // fecha7: string,
    // fecha8: string,
    // fecha9: string,
    puntosTotales: string
}
function ResultadosSCC() {
    const [pilotosGT3, setPilotosLMH] = useState<Pilotos[]>([])
    const [pilotosTCR, setPilotosGT3] = useState<Pilotos[]>([])
    // Informacion para tablas (campeonatos activos)
    useEffect(() => {
        fetch("https://opensheet.elk.sh/1lq1qQu2cl24nXhVj69TjAqHiajGBr-SiITtUkDJ1luo/Championship+Standings+GT3")
            .then(res => res.json())
            .then(data => {
                let pilotosGT3 = [];

                pilotosGT3 = data.map((pilotos: any) => ({
                    gamertag: pilotos.Gamertag,
                    auto: pilotos.Dorsal,
                    puntosTotales: pilotos.Totales,
                }))
                setPilotosLMH(pilotosGT3);
            });
        fetch("https://opensheet.elk.sh/1lq1qQu2cl24nXhVj69TjAqHiajGBr-SiITtUkDJ1luo/Championship+Standings+TCR")
            .then(res => res.json())
            .then(data => {
                let pilotosTCR = [];

                pilotosTCR = data.map((pilotos: any) => ({
                    gamertag: pilotos.Gamertag,
                    auto: pilotos.Dorsal,
                    puntosTotales: pilotos.Totales,
                }))
                setPilotosGT3(pilotosTCR);
            });
    }, [])
    return <>
        <NavBar />
        <div className="flex flex-col my-35 text-sm lg:text-lg md:m-10 items-center gap-5 justify-center mx-2 text-gray-300">
            <h2 className="text-4xl font-medium">Resultados de GT3</h2>
            <table className="table-auto border-collapse border border-gray-400 overflow-scroll">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Gamertag</th>
                        <th className="border border-gray-400 px-4 py-2">Puntos totales</th>
                    </tr>
                </thead>
                <tbody>
                    {pilotosGT3.map((piloto, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2"><b>#{piloto.auto}</b> {piloto.gamertag}</td>
                            <td className="border border-gray-400 px-4 py-2 text-right">{piloto.puntosTotales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-4xl font-medium mt-18">Resultados de TCR</h2>
            <table className="table-auto border-collapse border border-gray-400 overflow-scroll">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Gamertag</th>
                        <th className="border border-gray-400 px-4 py-2">Puntos totales</th>
                    </tr>
                </thead>
                <tbody>
                    {pilotosTCR.map((piloto, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2"><b>#{piloto.auto}</b> {piloto.gamertag}</td>
                            <td className="border border-gray-400 px-4 py-2 text-right">{piloto.puntosTotales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer />
    </>
}

export default ResultadosSCC;
// import { useEffect, useState } from "react";
// type Pilotos = {
//     gamertag: string,
//     auto: string,
//     fecha1: string,
//     fecha2: string,
//     fecha3: string,
//     fecha4: string,
//     fecha5: string,
//     fecha6: string,
//     fecha7: string,
//     fecha8: string,
//     fecha9: string,
//     puntosTotales: string
// }
function ResultadosSCC() {
    // const [pilotosLMH, setPilotosLMH] = useState<Pilotos[]>([])
    // const [pilotosGT3, setPilotosGT3] = useState<Pilotos[]>([])
    // // Informacion para tablas (campeonatos activos)
    // useEffect(() => {
    //     fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Championship+Standings+LMH")
    //         .then(res => res.json())
    //         .then(data => {
    //             let pilotosLMH = [];

    //             pilotosLMH = data.map((pilotos: any) => ({
    //                 gamertag: pilotos.Gamertag,
    //                 auto: pilotos.Auto,
    //                 puntosTotales: pilotos.Totales,
    //             }))

    //             setPilotosLMH(pilotosLMH);
    //             console.log(pilotosLMH)
    //         });
    //     fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Championship+Standings+GT3")
    //         .then(res => res.json())
    //         .then(data => {
    //             let pilotosGT3 = [];

    //             pilotosGT3 = data.map((pilotos: any) => ({
    //                 gamertag: pilotos.Gamertag,
    //                 auto: pilotos.Auto,
    //                 puntosTotales: pilotos.Totales,
    //             }))

    //             setPilotosGT3(pilotosGT3);
    //             console.log(pilotosGT3)
    //         });
    //     // console.log(pilotosGT3)
    //     // console.log(pilotosLMH)
    // }, [])
    return (
        <h2 className="text-gray-200">SCC</h2>
    );
}

export default ResultadosSCC;
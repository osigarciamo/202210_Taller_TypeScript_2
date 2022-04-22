import { Serie } from "./Serie.js";
import { dataSeries } from "./Data.js";

const seriesTbody: HTMLElement = document.getElementById('seriesTV')!; // Nodo tbody que tiene el id="seriesTV"
const avgSeasonNumber: HTMLElement= document.getElementById('average')!;

renderSeriesInTable(dataSeries);
avgSeasonNumber.innerHTML = `${seasonsAverage(dataSeries)}`

/* Lee los datos de un arreglo de objetos series y finalmente lo despliega en la tabla de series actuales (DOM). */
function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando programas de televisión y series');
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td> <td>${serie.name}</td> <td>${serie.channel}</td> <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
  });
}
/* Calcula el promedio de las temporadas. */
function seasonsAverage (series : Serie[]): number {
    console.log('Determinando el promedio de las series');
    let totalSeasons: number=0;
    series.forEach((Serie) => totalSeasons = totalSeasons + Serie.seasons);
    return (totalSeasons/ series.length);
}
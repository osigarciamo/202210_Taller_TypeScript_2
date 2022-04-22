import { dataSeries } from "./Data.js";
var seriesTbody = document.getElementById('seriesTV'); // Nodo tbody que tiene el id="seriesTV"
var avgSeasonNumber = document.getElementById('average');
renderSeriesInTable(dataSeries);
avgSeasonNumber.innerHTML = "".concat(seasonsAverage(dataSeries));
/* Lee los datos de un arreglo de objetos series y finalmente lo despliega en la tabla de series actuales (DOM). */
function renderSeriesInTable(series) {
    console.log('Desplegando programas de televisión y series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
/* Calcula el promedio de las temporadas. */
function seasonsAverage(series) {
    console.log('Determinando el promedio de las series');
    var totalSeasons = 0;
    series.forEach(function (Serie) { return totalSeasons = totalSeasons + Serie.seasons; });
    return (totalSeasons / series.length);
}

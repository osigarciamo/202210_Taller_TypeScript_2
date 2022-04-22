import { dataSeries } from "./Data.js";
var seriesTbody = document.getElementById('seriesTV'); // Nodo tbody que tiene el id="seriesTV"
var seriesCardDiv = document.getElementById('card-series');
var avgSeasonNumber = document.getElementById('avg-seasons');
var nameButtons = document.getElementsByClassName('btn-serie-name');
renderSeriesInTable(dataSeries);
avgSeasonNumber.innerHTML = "".concat(seasonsAverage(dataSeries));
var _loop_1 = function (i) {
    nameButtons[i].addEventListener("click", function () {
        clearInfoCard();
        renderSeriesInformation(dataSeries[i]);
    });
};
for (var i = 0; i < nameButtons.length; i++) {
    _loop_1(i);
}
/* Borra la informaci'on */
function clearInfoCard() {
    while (seriesCardDiv.hasChildNodes()) {
        if (seriesCardDiv.firstChild != null) {
            seriesCardDiv.removeChild(seriesCardDiv.firstChild);
        }
    }
}
/* Lee los datos de un arreglo de objetos series y finalmente lo despliega en la tabla de series actuales (DOM). */
function renderSeriesInTable(series) {
    console.log('Desplegando programas de televisión y series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> <td>").concat(serie.name, "</td> <td>").concat(serie.channel, "</td> <td>").concat(serie.seasons, "</td>");
        var infoElement = document.createElement("td");
        infoElement.innerHTML = "<input type = \"button\" value = \"".concat(serie.name, "\" class=\"btn btn-link series-button\"></button>");
        seriesTbody.appendChild(trElement);
    });
}
/* Genera la informacion de la serie. */
function renderSeriesInformation(serie) {
    console.log('Desplegando informacion');
    var divElement = document.createElement("div");
    divElement.innerHTML = "<img class='card-img-top' src=\"".concat(serie.image, "\" alt='image-serie-").concat(serie.name, "'>\n                                <div class='card-body'>\n                                <h5 class='card-title'>").concat(serie.name, "</h5>\n                                <p class='card-text'>").concat(serie.description, "</p>\n                                <a href=\"").concat(serie.review, "\">").concat(serie.review, "</a>\n                                </div>");
    seriesCardDiv.appendChild(divElement);
}
/* Calcula el promedio de las temporadas. */
function seasonsAverage(series) {
    console.log('Determinando el promedio de las series');
    var totalSeasons = 0;
    series.forEach(function (Serie) { return totalSeasons = totalSeasons + Serie.seasons; });
    return (totalSeasons / series.length);
}


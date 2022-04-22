import { Serie } from "./Serie.js";
import { dataSeries } from "./Data.js";

const seriesTbody: HTMLElement = document.getElementById('seriesTV')!; // Nodo tbody que tiene el id="seriesTV"
const seriesCardDiv: HTMLElement = document.getElementById('card-series')!;
const avgSeasonNumber: HTMLElement= document.getElementById('avg-seasons')!;
let nameButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('btn-serie-name')!;

renderSeriesInTable(dataSeries);
avgSeasonNumber.innerHTML = `${seasonsAverage(dataSeries)}`

for (let i = 0; i < nameButtons.length; i++) {
    nameButtons[i].addEventListener("click", () => {
        clearInfoCard();
        renderSeriesInformation(dataSeries[i]);
    });
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
function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando programas de televisión y series');
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td> <td>${serie.name}</td> <td>${serie.channel}</td> <td>${serie.seasons}</td>`;
        let infoElement = document.createElement("td");
        infoElement.innerHTML = `<input type = "button" value = "${serie.name}" class="btn btn-link series-button"></button>`;
        seriesTbody.appendChild(trElement);
  });
}
/* Genera la informacion de la serie. */
function renderSeriesInformation(serie: Serie): void{
    console.log('Desplegando informacion');
    let divElement = document.createElement("div");
        divElement.innerHTML = `<img class='card-img-top' src="${serie.image}" alt='image-serie-${serie.name}'>
                                <div class='card-body'>
                                <h5 class='card-title'>${serie.name}</h5>
                                <p class='card-text'>${serie.description}</p>
                                <a href="${serie.review}">${serie.review}</a>
                                </div>`;
    seriesCardDiv.appendChild(divElement);
}

/* Calcula el promedio de las temporadas. */
function seasonsAverage (series : Serie[]): number {
    console.log('Determinando el promedio de las series');
    let totalSeasons: number=0;
    series.forEach((Serie) => totalSeasons = totalSeasons + Serie.seasons);
    return (totalSeasons/ series.length);
}



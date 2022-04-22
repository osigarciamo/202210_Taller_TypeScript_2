/* Crea la clase Serie */
export class Serie {
    // Atributos de la clase serie
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    review: string;
    image: string;

    // Constructor
    constructor(serieId: number, serieName: string, serieChannel: string, serieSeasons: number, serieDescription: string, serieReview: string, serieImage: string) {
        this.id = serieId;
        this.name = serieName;
        this.channel = serieChannel;
        this.seasons = serieSeasons;
        this.description = serieDescription;
        this.review = serieReview;
        this.image = serieImage;
    }
}
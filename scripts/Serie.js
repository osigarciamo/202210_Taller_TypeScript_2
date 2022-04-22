/* Crea la clase Serie */
var Serie = /** @class */ (function () {
    // Constructor
    function Serie(serieId, serieName, serieChannel, serieSeasons, serieDescription, serieReview, serieImage) {
        this.id = serieId;
        this.name = serieName;
        this.channel = serieChannel;
        this.seasons = serieSeasons;
        this.description = serieDescription;
        this.review = serieReview;
        this.image = serieImage;
    }
    return Serie;
}());
export { Serie };

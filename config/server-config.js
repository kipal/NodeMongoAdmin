module.exports = {
        frontends : {
            web : new Contour.Core.Frontend.Server(3000)
        },
        apis : {
            db : new Contour.Core.DB.MongoDB.Server(8080)
        }
};
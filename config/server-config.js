module.exports = {
    frontend : {
        web : new Contour.Core.Frontend.Server(3000)
    },
    api : {
        mongoDB : new Contour.Core.DB.MongoDB.Server(8080)
    }
};
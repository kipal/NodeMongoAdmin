module.exports = {
    frontend : {
        web : new Contour.Core.Frontend.Server(3000, Service.Core.ClientScript.Register)
    },
    api : {
        mongoDB : new Contour.Core.DB.MongoDB.Server(8080)
    }
};
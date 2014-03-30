module.exports = {
    frontend : {
        web : new Contour.Core.Frontend.Server(3000, new Contour.Core.Frontend.ResponseHandler(Service.ClientScriptModule.getRegister()))
    },
    api : {
        mongoDB : new Contour.Core.DB.MongoDB.Server(8080)
    }
};
module.exports = {
    frontend : {
        web : new Contour.Frontend.Http.Server(
                3000,
                new Contour.Frontend.Http.ResponseHandler(Service.ClientScript.getRegister())
              )
    },
    api : {
        mongoDB : new Contour.Core.DB.MongoDB.Server(8080)
    }
};
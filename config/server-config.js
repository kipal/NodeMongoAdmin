Register = Contour.Core.ClientScript.Register(new Contour.Core.ClientScript.Parser());

module.exports = {
    frontend : {
        web : new Contour.Core.Frontend.Server(3000, new Contour.Core.Frontend.ResponseHandler(new Register()))
    },
    api : {
        mongoDB : new Contour.Core.DB.MongoDB.Server(8080)
    }
};
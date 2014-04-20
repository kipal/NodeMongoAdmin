module.exports = {
    frontend : {
        web : {
            port : 8080,
            host : "localhost"
        }
    },
    api : {
        mongodb : {
            alias : "db",
            port  : 3000,
            host  : "localhost",
            methods : [
                {
                    name : "listDatabases"
                },
                {
                    name : "serverStatus"
                }
            ]
        }
    }
};
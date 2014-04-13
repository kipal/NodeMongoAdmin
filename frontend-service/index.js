var Register         = Contour.Core.ClientScript.Register(new Contour.ClientScript.Parser(), Contour.ClientScript.DepChecker);
Service.ClientScript = Contour.Core.ClientScript.Module(new Register("Service"));


console.log("\nService module loading...");
module.exports = requireDir(module, __dirname);
console.log("Service modules are loaded.\n");

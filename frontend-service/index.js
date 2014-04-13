var Register         = Contour.Core.ClientScript.Register(new Contour.ClientScript.Parser(), Contour.ClientScript.DepChecker);
Service.ClientScript = Contour.Core.ClientScript.Module(new Register("Service"));


console.log("\nFrontend service module loading...");
module.exports = requireDir(module, __dirname);
console.log("Frontend service modules are loaded.\n");

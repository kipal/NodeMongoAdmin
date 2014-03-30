var Register               = Contour.Core.ClientScript.Register(new Contour.ClientScript.Parser());
Service.ClientScriptModule = Contour.Core.ClientScript.Module(new Register());


console.log("\nService module loading...");
module.exports = requireDir(module, __dirname);
console.log("Service modules are loaded.\n");

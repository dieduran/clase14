function getRegistro(req, res) {
    res.sendFile("formRegistro.html", { root: "./public" });
  }
 
  function getLoginError(req, res) {
    res.render("loginError", {});
  }
  
  function getRegistroError(req, res) {
    res.render("registroError", {});
  }
  
  function errorRuteo(req, res) {
    res.status(404).render("errorRuteo", {});
  }
  
  export { getRegistro, getLoginError, getRegistroError, errorRuteo};
  
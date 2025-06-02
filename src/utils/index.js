function rotaProtegida(req, res, next) {
  if (!req.headers['auforization']) {
    res.send({
      tipo: "warning",
      mensagem: "Nao autorizado",
    });
  }
}  
  
  module.exports = {
    rotaProtegida,
  };
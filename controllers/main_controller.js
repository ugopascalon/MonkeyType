//Connexion à la base
const model = require("../models/model");
const mysqlconnexion = model.mysqlconnexion;

mysqlconnexion.connect((err) => {
  if (!err) {
    console.log("BDD connectée.");
  } else {
    console.log("BDD connexion échouée \n Erreur: " + JSON.stringify(err));
  }
});

const main = (req, res) => {
  res.render("pages/main.ejs");
};

//Exportation des modules
module.exports = {
  main,
};

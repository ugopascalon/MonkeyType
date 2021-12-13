//Déclaration des dépendances
const mysql = require("mysql");
const iniparser = require("iniparser");

//Récupération des données (DB.ini)
const configDB = iniparser.parseSync("public/db.ini");

//Connexion a la base de données
const mysqlconnexion = mysql.createConnection({
  host: configDB["dev"]["host"],
  user: configDB["dev"]["user"],
  password: configDB["dev"]["password"],
  database: configDB["dev"]["database"],
});

//Exportation des modules
module.exports = {
  mysqlconnexion,
};

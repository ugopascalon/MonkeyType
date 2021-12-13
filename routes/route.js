//Déclaration des dépendances
const express = require("express");
const routeur = express.Router();

//Déclaration des controllers
const main_controller = require("../controllers/main_controller");

routeur.get("/", main_controller.main);

module.exports = routeur;

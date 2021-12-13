//Déclaration des dépendances
const express = require("express");

//Initialisation de l'application avec express
const app = express();
app.set("view engine", "ejs");

//Déclaration des middlewares
app.use(express.urlencoded({ extended: true }));

//Déclaration des routes
const routeur = require("./routes/route");
app.use("/", routeur);

//Utilisation du fichier Public (Images,Css)
app.use("/public", express.static("public"));
app.use("/view", express.static("view"));

//Lancer l'application sur le port 3000
app.listen(3000, () => console.log("Le serveur est lancé."));

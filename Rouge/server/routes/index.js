var express = require('express');
var router = express.Router();
const connection = require('./conf');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/jeux/', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from Jeux', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des jeux');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });

router.get('/jeux/id', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT id from Jeux', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des jeux');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });
  
  router.get('/jeux/choisis', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT nom, Description from Jeux', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des jeux');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });

router.get('/jeux/date', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from Jeux WHERE id < 3', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des jeux');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });

  router.get('/jeux/choix', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from Jeux WHERE id = 2', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des jeux');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });

  router.get('/jeux/decroissant', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from Jeux order by id desc', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des jeux');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });

    router.post('/jeux/', (req, res) => {

    const formData = req.body;
  
    connection.query('INSERT INTO favoris SET ?', formData, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un jeu");
      } else {
        res.sendStatus(200);
      }
    });
  });

router.put('/jeux/:id', (req, res) => {

    // récupération des données envoyées
    const idJeux = req.params.id;
    const formData = req.body;
  
    // connection à la base de données, et insertion de l'employé
    connection.query('UPDATE Jeux SET ? WHERE id = ?', [formData, idJeux], err => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un jeu");
      } else {
  
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });

// écoute de l'url "/api/employees"
router.delete('/jeux/:id', (req, res) => {

  // récupération des données envoyées
  const idJeux = req.params.id;

  // connexion à la base de données, et suppression de l'employé
  connection.query('DELETE FROM Jeux WHERE id = ?', [idJeux], err => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un jeu");
    } else {

      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

router.put('/jeux/:id', (req, res) => {

  const idJeux = req.params.id;

  connection.query('UPDATE Jeux SET id=!id WHERE id = ?', idJeux, err => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un jeu");
    } else {

      res.sendStatus(200);
    }
  });
});

router.delete('/jeux/:id', (req, res) => {

  const idJeux = req.params.id;

  connection.query('DELETE FROM Jeux WHERE id = 3', idJeux, err => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un jeu");
    } else {

      res.sendStatus(200);
    }
  });
});
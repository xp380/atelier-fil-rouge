var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// const express = require('express');
// const app = express();
// const port = 3000;
// const connection = require('./conf');
// const bodyParser = require('body-parser');


// // Support JSON-encoded bodies
// app.use(bodyParser.json());
// // Support URL-encoded bodies
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.get('/api/employees', (req, res) => {

//     // connection à la base de données, et sélection des employés
//     connection.query('SELECT * from employee', (err, results) => {
  
//       if (err) {
//         console.log(err);
        
//         // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//         res.status(500).send('Erreur lors de la récupération des employés');
//       } else {
  
//         // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//         res.json(results);
//       }
//     });
//   });

//   app.get('/api/movies', (req, res) => {
//     connection.query('SELECT * from movie', (err, results) => {
//         if (err) {
  
//             // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//             res.status(500).send('Erreur lors de la récupération des films');
//           } else {
      
//             // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//             res.json(results);
//           }     
//     })
//   })
  
//   app.get('/api/movies/names', (req, res) => {
//     connection.query('SELECT name from movie', (err, results) => {
//         if (err) {
  
//             // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//             res.status(500).send('Erreur lors de la récupération du titre des films');
//           } else {
      
//             // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//             res.json(results);
//           }     
//     })
//   })

//   // écoute de l'url "/api/employees" avec le verbe POST
//     app.post('/api/employees', (req, res) => {

//     // récupération des données envoyées
//     const formData = req.body;
  
//     // connexion à la base de données, et insertion de l'employé
//     connection.query('INSERT INTO employee SET ?', formData, (err, results) => {
  
//       if (err) {
//         // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//         console.log(err);
//         res.status(500).send("Erreur lors de la sauvegarde d'un employé");
//       } else {
//         // Si tout s'est bien passé, on envoie un statut "ok".
//         res.sendStatus(200);
//       }
//     });
//   });

// // écoute de l'url "/api/employees"
// app.put('/api/employees/:id', (req, res) => {

//     // récupération des données envoyées
//     const idEmployee = req.params.id;
//     const formData = req.body;
  
//     // connection à la base de données, et insertion de l'employé
//     connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {
  
//       if (err) {
//         // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//         console.log(err);
//         res.status(500).send("Erreur lors de la modification d'un employé");
//       } else {
  
//         // Si tout s'est bien passé, on envoie un statut "ok".
//         res.sendStatus(200);
//       }
//     });
//   });
  

// app.listen(port, (err) => {
//   if (err) {
//     throw new Error('Something bad happened...');
//   }

//   console.log(`Server is listening on ${port}`);
// });
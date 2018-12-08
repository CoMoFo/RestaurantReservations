<<<<<<< HEAD
// Dependencies
// =============================================================
=======
>>>>>>> 8c97bb7e48eb34daef0db53e55adbdaf88634993
var express = require("express");
var path = require("path");

// Sets up the Express App
<<<<<<< HEAD
// =============================================================
var app = express();
var PORT = 3000;
=======
var app = express();
var PORT = process.env.PORT || 3000;
>>>>>>> 8c97bb7e48eb34daef0db53e55adbdaf88634993

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
// Star Wars Characters (DATA)
// =============================================================
var tables = [
//   {
//     routeName: "yoda",
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
//   },
//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Master",
//     age: 55,
//     forcePoints: 1350
//   }
=======
// Pages (DATA)
var reservations = [
  {
    routeName: "reservation",
    name:"",
    phoneNumber:"",
    email:"",
    uniqueID:"",
  }
>>>>>>> 8c97bb7e48eb34daef0db53e55adbdaf88634993
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

<<<<<<< HEAD
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

=======
>>>>>>> 8c97bb7e48eb34daef0db53e55adbdaf88634993
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

<<<<<<< HEAD
// Displays all tables
app.get("/api/characters", function(req, res) {
  return res.json(tables);
});

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New table - takes in JSON input
app.post("/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  tables.push(newReservation);

  res.json(newReservation);
=======
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all RESERVATIONS
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservations;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New RESERVATIONS - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newreservations = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newreservations.routeName = newreservations.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservations);

  pages.push(newreservations);

  res.json(newreservations);
>>>>>>> 8c97bb7e48eb34daef0db53e55adbdaf88634993
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

const fs = require('fs');
const express = require('express');
const app = express;
const path = require('path');
const uuid = require('uuid');




app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
//   double check the path for the 2nd parameter
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
//   double check the path for the 2nd parameter 
);

// javascript class for db actions like read and write z
// path: 'db/db.json'
// function to get notes 
// use our read function 

// example
// JSON.parse(notes)

// function to add notes

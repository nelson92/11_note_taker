const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const uuid = require('./Develop/uuid');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

// const routes = require('./routes/notes')
// const api = require('./index.js');
// create new file for uuid? 

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// //   double check the path for the 2nd parameter
// );






// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// //   double check the path for the 2nd parameter 
// );



// should receive a new tnote to save and add it to the db.json file, then return a new note to the client
app.post('/api/notes', (req, res) =>
  res.json('')
);
// javascript class for db actions like read and write z
// path: 'db/db.json'
// function to get notes 
// use our read function 

// example
// JSON.parse(notes)

// function to add notes


app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}!`)
});

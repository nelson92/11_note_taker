const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// should receive a new tnote to save and add it to the db.json file, then return a new note to the client
// app.post('/api/notes', (req, res) =>
//   res.json('')
// );

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}!`)
});

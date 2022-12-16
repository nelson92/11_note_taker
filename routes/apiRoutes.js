const router = require('express').Router();
const fs = require('fs');
const uuid = require("../uuid");


// should read the db.json file and return all saved notes 
router.get('api/notes', (req,res) => {
  var getNotes = fs.readFileSync('./db.db.json');
  var showNotes = JSON.parse(getNotes);
  return res.json(showNotes);
})

// post to get note to save in db.json file
router.post('/notes', (req,res) => {
  const id = uuid();
  const {title, text} = req.body
  const newNote = {title, text, id};
    
  const savedNotes = fs.readFileSync('./db/db.json');
  const newArray = JSON.parse(savedNotes);

  newArray.push(newNote);

  const info = JSON.stringify(newArray);
  fs.writeFile('./db/db/json', info, (err) => {
    err ? console.error("Error"): console.log("Success");

  }
  )
})

module.exports = router;
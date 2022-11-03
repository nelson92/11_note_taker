
const path = require('path');
const router = require('express').Router();

// 
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// 
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;



// info/examples from mini project

// notes.get('/:note_id', (req, res) => {

// }
// )


// notes.delete()


// notes.post('')
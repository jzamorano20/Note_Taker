const router = require('express').Router();
const path = require('path');

// response to a client when a GET request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// response to a client when a GET request is made 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
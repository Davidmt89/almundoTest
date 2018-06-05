const express = require('express')
const router = express.Router();


// Get hotels
router.get('/', (req, res) => {
	res.send('it works')
});

router.get('/hotels', (req, res) => {
	var fs = require('fs');
	res.send(200, JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8')));
});

module.exports = router;

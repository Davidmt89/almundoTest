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

router.get('/hotels/:name', (req, res) => {
	var fs = require('fs');
	let filter = req.params['name'];
	var hotelsArr = [];
	var consult = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8'));
	var result = consult.find(function(element) {
		if (element.name.indexOf(filter) >= 0) {
				hotelsArr.push(element);
		}
	});
	res.send(200, hotelsArr);
});

router.get('/hotels/filters/:star', (req, res) => {
	var fs = require('fs');
	let filter = parseInt(req.params['star']);
	var hotelsArr = [];
	var consult = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8'));
	var result = consult.find(function(element) {
		if (filter == 6) {
			hotelsArr.push(element);
		}
		else if (element.stars == filter) {
				hotelsArr.push(element);
		}
	});
	res.send(200, hotelsArr);
});

module.exports = router;

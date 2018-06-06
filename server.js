const express = require('express');
const path = require('path');
const app = express();

// Getting our routes
const routes = require('./server/routes/routes.js');

// Using middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/routes', routes);

//Cath all other routes request and return it to the index
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 4600;
app.listen(port, (req, res)=>{
  console.log(`Runing on port ${port}`);
});

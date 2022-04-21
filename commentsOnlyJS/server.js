// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 8080;

// Spin up the server
const server = app.listen(port, listening);

function listening() {
  console.log('Server is running');
  console.log(`Running on localhost: ${port}`); // Callback to debug
};

// Initialize all route with a callback function

app.get('/all', getInfo)
// Callback function to complete GET '/all'
function getInfo(request, response) {
  response.send(projectData)
}
// Post Route
app.post('/add', addInfo);

function addInfo(request, response) {
  projectData.temperture = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;
  res.send(projectData);
}
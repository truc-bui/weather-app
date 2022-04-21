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
  console.log(`Running on localhost: ${port}`); // Callback to debug
};

// Initialize all route with a callback function
app.get('/all', getInfo)
// Callback function to complete GET '/all'
function getInfo(_request, response) {
  response.send(projectData);
}
// Post Route
app.post('/add', addInfo);

function addInfo(request, response) {
  projectData.temp = request.body.temp;
  projectData.date = request.body.date;
  projectData.content = request.body.content;
  response.send(projectData);
}
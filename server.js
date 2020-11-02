// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

// TODO-ROUTES!
app.get('/', getweatherdata) 

function getweatherdata(req,res)
{
res.send(projectData)
}

// Setup GET route
app.get("/weatherdetails", (req, res) => {
    res.send(projectData);
  });
  
  // Setup POST route
  app.post("/add", (req, res) => {
    let data = req.body;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feel;
    projectData["date"] = data.date;
    projectData["temp_max"] = data.temp_max;
    projectData["temp_min"] = data.temp_min;
    projectData["type"] = data.type;
    projectData["name"] = data.name;
    res.send(projectData);
  });
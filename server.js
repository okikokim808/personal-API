// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://serene-tor-40898.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "about me"},
      {method: "GET", path: "/api/shows", description: "View info on my favorite shows"}, // CHANGE ME
      {method: "POST", path: "/api/shows", description: "E.g. Create what show you want"} // CHANGE ME
    ]
  })
});

// Endpoint for my profile information
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Francisco Kiko Sandoval",
    githubUsername: "okikokim808",
    githubLink: "https://github.com/okikokim808",
    githubProfileImage: "",
    personalSiteLink: "okikokim808.github.io",
    currentCity: "San Francisco, CA",
    pets: [{name: "Coco", type: "dog", breed: "Chocolate Lab"}, {name: "Nermal", type: "fish", breed: "Gold"}],
  })
})

//Index
app.get('/api/shows', (req, res) => {
  db.Show.find().exec((err, shows) => {
    res.json({data: shows});
  })
})

// Create
app.post('/api/shows', (req, res) => {
  // Endpoint will add a show to our shows db and respond with new show.
  const newShow = req.body;
  const newId = ++shows[shows.length-1]._id;
  newShow._id = newId;
  shows.push(newShow);
  res.json(newShow);
})

// Show my show by id
app.get('/api/shows/:id', (req, res) => {
  const id = parseInt(req.params.id);

  shows.forEach( show => {
    if(show._id == id){
      res.json(show);
    }
  })
})

// destroy a show
app.delete('/api/shows/:id', (req, res) => {
  let deleteId = parseInt(req.params.id);
  shows = shows.filter(show => show._id !== deleteId);
  res.json(shows);
})
/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});

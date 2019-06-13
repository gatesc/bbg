const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const bbg = require('./bbg.js');

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
//const router = express.Router();

// <CRG> Put DB connector stuff here

// routes
//app.get("/", (req, res) => {
//  res.send("HI MOM")
//})

app.get("/", (req, res) => {
  res.send("HI THERE")
})

app.get('/getGameIds', async (req, res) => {
  console.log(req.query)
  console.log("name... ", req.query.name)
  console.log(bbg)
  let theData = await bbg.getGameIds(req.query.name);
  return res.json({success: true, data: theData});
})

app.get('/getGameInfo', async (req, res) => {
  console.log("HERE I AM")
  console.log(req.query)
  console.log("name... ", req.query.name)
  console.log(bbg)
  let theData = await bbg.getGameInfo(req.query.name);
  return res.json({success: true, data: theData});
})


// finish up stuff
//app.use('/api', router);
app.listen(API_PORT, () => console.log('Listening on port ', API_PORT));

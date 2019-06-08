const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

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

app.get('/getGameInfo', (req, res) => {
  console.log("HERE I AM")
  return res.json({success: true, data: 'Hi Mom!'});
})

// finish up stuff
//app.use('/api', router);
app.listen(API_PORT, () => console.log('Listening on port ', API_PORT));

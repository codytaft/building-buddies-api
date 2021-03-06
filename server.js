const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

module.exports = { app, database };

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

const buildings = require('./routes/buildings');
const users = require('./routes/users');
const interests = require('./routes/interests');

app.use('/api/v1/buildings', buildings);
app.use('/api/v1/users', users);
app.use('/api/v1/interests', interests);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`);
});

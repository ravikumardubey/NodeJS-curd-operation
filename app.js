const userController = require('./controller/userController.js');
const authController = require('./controller/authController.js');
const express = require('express');
var https = require('https');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressSanitizer = require('express-sanitizer');
const helmet = require('helmet');
const cors = require('cors');
const massive = require('massive');
const morgan = require('morgan');
const app = express();
const common = require('./config.js');
/**
 * Applying Middleware
 */
function applyMiddleware() {
  app.use(cors());
  app.use(expressSanitizer());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(session({
    secret: common.session_key,
    resave: true,
    saveUninitialized: false
  }));
}
/**
 * Initializing Database using Massive
 */
function initializingDatabase() {
  massive(common.connection_string).then(db => {
    app.set('db', db);
    console.log('db connected!')
  });
}

// adding morgan to log HTTP requests
app.use(morgan('combined'));
applyMiddleware();
initializingDatabase();
app.post('/loginuser', authController.loginuser);
app.post('/users', userController.getusers);
app.post('/adduser', userController.adduser);
app.post('/updateuser', userController.updateUser);
app.post('/userlist', userController.userllst);

// starting the server
app.listen(4000, () => {
  console.log('listening on port 4000');
});
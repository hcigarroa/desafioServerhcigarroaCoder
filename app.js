/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful,
 * such as when you deploy to a server, or a PaaS like Heroku.
 *
 * For example:
 *   => `node app.js`
 *   => `npm start`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *
 * The same command-line arguments and env vars are supported, e.g.:
 * `NODE_ENV=production node app.js --port=80 --verbose`
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/app.js
 */


// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);



// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
var sails;
var rc;
try {
  sails = require('sails');
  rc = require('sails/accessible/rc');
} catch (err) {
  console.error('Encountered an error when attempting to require(\'sails\'):');
  console.error(err.stack);
  console.error('--');
  console.error('To run an app using `node app.js`, you need to have Sails installed');
  console.error('locally (`./node_modules/sails`).  To do that, just make sure you\'re');
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error('If Sails is installed globally (i.e. `npm install -g sails`) you can');
  console.error('also run this app with `sails lift`.  Running with `sails lift` will');
  console.error('not run this file (`app.js`), but it will do exactly the same thing.');
  console.error('(It even uses your app directory\'s local Sails install, if possible.)');
  return;
}//-•


// Start server
sails.lift(rc('sails'));

const express = require('express');
const _ = require('lodash');
const indexRouter = require('./src/routes/index');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        enviroment: process.env.ENVIRONMENT || 'undefine',
        health: 'Up'
    })
});

app.get('/', (_req, res) => {
    res.render('index', {message: "Hola como va"})
});

app.get('/datos', (req, res) => {
const {min, max, level, title } = req.query;
if(_.isNil(min) || _.isNil(max) || _.isNil(level) || _.isNil(title)){
    return res.render('error', {error: "Falta algun parametro flaco!"})
}
const diff = parseInt(max) - parseInt(min);
const realLevel = parseInt(level) - parseInt(min);
const perLevel = realLevel / diff;
if(parseInt(level) > parseInt(max) || parseInt(level) < parseInt(min)){
    return res.render('error', {error: "El nivel esta fuera de rango, revisalo chavito"})
}
res.render('datos', {max, min, perLevel, title})
 })

app.use('/public', express.static(__dirname + '/public'));

app.use('/api', indexRouter);


app.use(errorMiddleware);




module.exports = app;
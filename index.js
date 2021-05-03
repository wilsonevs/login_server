const express = require('express');
const path = require('path');
const { dbConnection } = require('./databases/config');
require('dotenv').config();

// DB Config
require('./databases/config').dbConnection();
dbConnection();

// App de Express
const app = express();

// Lectura y parseo del Body
app.use( express.json() );

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );


// Mis rutas
app.use('/api/login', require('./routers/auth'));

server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});



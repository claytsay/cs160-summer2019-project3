// Starts the server


const express = require('express');
const path = require('path');

const app = express();

// Seht up the HTTP server
app.use(express.static(path.join(__dirname, 'build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
app.get('*', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, 'build') });
});

// Set up the WS server
/* const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(msg);
    io.emit('broadcast', msg);
  })
}); */

const port = 3000;
app.listen(port);
// server.listen(port + 1);

console.log('App is listening on port ' + port);

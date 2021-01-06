const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/basic-angular-ui-template'));

const greenhouses = {};
const socketIds = {};

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/basic-angular-ui-template/index.html'));
});


io.on('connection', function (socket) {

  console.log(socket.id + " is connected.");

  socket.on('setGreenhouse', greenhouse => {
    greenhouses[greenhouse.id] = greenhouse.temperature; // update greenhouse temp
    socketIds[greenhouse.id] = socket.id;
    console.log(greenhouses);
  });

  setInterval(() => {
    socket.emit('getGreenhouses',greenhouses);
  }, 3000);

  socket.on('updateGreenhouse', greenhouse => {
    io.to(socketIds[greenhouse.id]).emit('setUpdate', greenhouse);
  })
  
  socket.on('disconnect', () => {
      console.log(socket.id + " is disconnected.");
      for (const [key, value] of Object.entries(socketIds)) {
        if(value === socket.id) {
          delete socketIds[key];
          if(greenhouses.hasOwnProperty(key))
            delete greenhouses[key];
        }
      }
  });
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});
const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if(req.method === 'GET') {
    var moves = ['left', 'right', 'up', 'down'];
    var move = moves[Math.floor(Math.random()* 4)]
    res.writeHead(200, headers);
    res.write(move);
    res.end();
  } else if (req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString()
        res.writeHead(200, headers);
        res.end(body);
      })
    } else {
        res.writeHead(200, headers);
        res.end();
        next();
  }
};




var express = require('express');
var app = express();
var exec = require('child_process').exec;

app.get("/", (req, res) => {
  exec('fortune -u | cowsay -f tux', (err, stdout, stderr) => {
    if(err){
      res.end(err);
      return;
    }

    if(stderr){
      res.end(stderr);
      return;
    }

    res.end(stdout);
  })
});

app.listen(8080);

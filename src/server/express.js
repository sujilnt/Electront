const express = require('express');
const dataCheck=()=>{
  const app = express();

  app.get('/api', function (req, res) {
    res.send('Hello World');
  });
  app.listen(300);
};
module.exports.dataCheck = dataCheck;

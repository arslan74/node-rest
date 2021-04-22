const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req , res ,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req , res)  => {
    res.send('Will send you all the dishes');
})
.post((req , res ) => {
    res.send('Will add the dish: ' + req.body.name  + ' with deatils ' + req.body.description);
})
.put((req , res ) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /dishes/');
})
.delete((req , res ) => {
      res.end('Deleting all dishes ');
  });

module.exports = dishRouter;
// For single dish
const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/').all((req , res ,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req , res)  => {
    res.send('Will send you all the leaders');
})
.post((req , res ) => {
    res.send('Will add the leader: ' + req.body.name  + ' with deatils ' + req.body.description);
})
.put((req , res ) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /leaders/');
})
.delete((req , res ) => {
      res.end('Deleting all leadera ');
  });


// For single leader

leadersRouter.route('/:leaderId').all((req , res ,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req , res ) => {
    res.send('Will send the deatils of leader ' + req.params.leaderId + 'to you!');
})
.post((req , res ) => {
    res.statusCode = 403;
    res.end('POST operation not supported on leader '+ req.params.leaderId);
})
.put( (req , res ) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader:' + req.body.name + ' with details ' + req.body.description)
})
.delete( (req , res ) => {
      res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leadersRouter;
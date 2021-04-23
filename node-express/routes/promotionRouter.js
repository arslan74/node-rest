const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/').all((req , res ,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req , res)  => {
    res.send('Will send you all the promotions');
})
.post((req , res ) => {
    res.send('Will add the promotion: ' + req.body.name  + ' with deatils ' + req.body.description);
})
.put((req , res ) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /promotions/');
})
.delete((req , res ) => {
      res.end('Deleting all promotion ');
  });

  // For single promotion

  promotionRouter.route('/:promotionId').all((req , res ,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req , res ) => {
    res.send('Will send the deatils of promotion ' + req.params.promotionId + 'to you!');
})
.post((req , res ) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promotionId);
})
.put( (req , res ) => {
    res.write('Updating the promotion: ' + req.params.promotionId + '\n');
    res.end('Will update the promotion:' + req.body.name + ' with details ' + req.body.description)
})
.delete( (req , res ) => {
      res.end('Deleting promotion: ' + req.params.promotionId);
});

module.exports = promotionRouter;
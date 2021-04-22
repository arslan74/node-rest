const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter')

const localhost = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/dishes' , dishRouter);
app.use(express.static(__dirname + '/public'));


// // will be executed when the /dishes is executed
// app.all('/dishes', (req , res ,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// });

// // all dishes end points

// app.get('/dishes', (req , res)  => {
//     res.send('Will send you all the dishes');
// });

// app.post('/dishes', (req , res ) => {
//     res.send('Will add the dish: ' + req.body.name  + ' with deatils ' + req.body.description);
// });

  
// app.put('/dishes', (req , res ) => {
//     res.statusCode = 403;
//     res.end('Put operation not supported on /dishes/');
// });

  
// app.delete('/dishes', (req , res ) => {
//       res.end('Deleting all dishes ');
//   });

// For single dish

app.get('/dishes/:dishId', (req , res ) => {
    res.send('Will send the deatils of dish ' + req.params.dishId + 'to you!');
});

app.post('/dishes/:dishId', (req , res ) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);});

  
app.put('/dishes/:dishId', (req , res ) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish:' + req.body.name + ' with details ' + req.body.description)
  });
  
app.delete('/dishes/:dishId', (req , res ) => {
      res.end('Deleting dish: ' + req.params.dishId);
  });


app.listen(3000)
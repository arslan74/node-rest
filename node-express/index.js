const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRouter');
const leadersRouter = require('./routes/leaderRouter');

const localhost = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.use('/dishes' , dishRouter);
app.use('/promotions' , promotionRouter);
app.use('/leaders', leadersRouter)

app.listen(port)
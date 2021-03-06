const express = require('express');
const morgan = require('morgan');

const app = express();

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', require('./routes/routes'));

//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

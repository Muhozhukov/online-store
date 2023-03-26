require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const router = require('./routes/index');
const errorHandler = require('./middlewares/ErrorHandlingMiddleware');

const { PORT } = process.env;
const { DB_URL } = process.env;

const app = express();
mongoose.connect(DB_URL);
console.log(DB_URL, PORT);
console.log('app is running');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server on port # ${PORT}`));

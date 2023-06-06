const express = require('express');
const cors = require('cors');

const app = express();

// ==>  API:
const index = require('./routers/index');
const productRoute = require('./routers/product.router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);

module.exports = app;
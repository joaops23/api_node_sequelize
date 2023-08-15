const express = require('express')
const api = express();

const routes = require('./router.js');

api.use(express.json());
api.use(routes);



api.listen(3001);
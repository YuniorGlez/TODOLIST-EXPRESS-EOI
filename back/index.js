const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

let config = require('./.env');
config = config[process.env.NODE_ENV];
if (!config) return console.error(`El environment ${process.env.NODE_ENV} no está definido en el fichero .env.js`);

// Conectamos mongoose con nuestra db
const mongoose = require('mongoose');
mongoose.connect(config.mongoDBURI + config.mongoDBDataBaseName);

// Usamos middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

const todosRouter = require('./api/TODOS');
app.use('/api/todos', todosRouter);

app.listen(config.port, (err) => {
    console.log('Servidor listo en el puerto ' + config.port);
})
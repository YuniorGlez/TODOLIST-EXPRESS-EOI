const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

let config = require('./.env');
const environment = process.env.NODE_ENV;
config = config[environment];
if (!config)
    return console.error(`Invalid ${environment} environment`);

    
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
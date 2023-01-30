// const fs = require('fs')
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');


console.clear()


// const base = 3;

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

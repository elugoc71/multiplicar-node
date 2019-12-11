const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

console.log(argv.base);

switch (comando) {


    case 'listar':
        console.log('Listar');

        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`${tabla}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:' + `${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}
//let base = '8';

//console.log(process.argv);

//let argv2 = process.argv;

console.log(`mi base ${argv.limite}`);
//console.log(argv2);
//let parametros = argv[2];
//let base = parametros.split('=')[1]

//console.log(base);
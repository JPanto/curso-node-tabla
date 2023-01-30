const fs = require('fs')

// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log(`Tabla del ${base}`)

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${i * base}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida, err => {
//             if (err) reject(err);
//         })
//         resolve(`tabla-${base}.txt`)
//     });
// }

const crearArchivo = async (base = 5, listar = false) => {
    try {
        console.log(`Tabla del ${base}`)

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${i * base}\n`;
        }

        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}
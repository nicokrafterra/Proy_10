const mostrarMenu = () =>{

    return new Promise( resolve => {
        console.log('\n')
        console.log(`============================`.green)
        console.log(`    seleccione una opcion   `.green)
        console.log(`============================\n`.green)
        console.log(`${'1.'.green} Crear nuevo Producto ` )
        console.log(`${'2.'.green} Listar Productos ` )
        console.log(`${'3.'.green} Listar clientes ` )
        console.log(`${'4.'.green} Listar Pedidos ` )
        console.log(`${'5.'.green} Enviar pedidos ` )
        console.log(`${'6.'.green} Borrar pedido ` )
        console.log(`${'0.'.green} Salir\n` )

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Selecione una opcion:', (opt) =>{
            readLine.close();
            resolve(opt)
        } )
    } )
}

const pausa = () =>{
    return new Promise(resolve =>{
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) =>{
            readLine.close();
            resolve()
        } )
    })
}

module.exports = {
    mostrarMenu,
    pausa
}
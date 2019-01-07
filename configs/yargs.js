
const  descripcion = {
    alias: 'd', 
    demand: true, 
    desc: 'descripcion de la tarea'
}

const complete = {
    alias: 'c',
    default: true,
    desc: 'marca como completado'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer' , {
        descripcion
    })
    .command('actualizar', 'actualizar el estado de una tarea por hacer', {
        descripcion,
        complete
    })
    .command('eliminar', 'Eliminar una tarea', {
        descripcion
    })
    .command('listar', 'Listar las tareas', {
        complete
    })
    .help()
    .argv

module.exports = {
    argv
}
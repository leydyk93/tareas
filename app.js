const argv = require('./configs/yargs').argv
const task = require('./por-hacer/por-hacer')
const colors = require('colors/safe')

let comando = argv._[0]

switch (comando) {
    case "crear":
        task.crear(argv.descripcion)
    break;
    case "listar":
        console.log(argv.complete, "que llega")
       let list =  task.getList()
       for( let task of list ){
        console.log(colors.green("======Tarea por Hacer====="))
        console.log(task.description)
        console.log(`Estado: ${task.complete}`)
        console.log(colors.green("=========================="))
       }
    break;
    case "actualizar":
        let resul = task.actualizar(argv.descripcion, argv.complete)
        if(resul) 
            console.log(colors.green("Tarea marcada como completa"))
        else
            console.log(colors.red("tarea no econtrada"))
    break;
    case "eliminar": 
       let taskeliminada = task.deleteTask(argv.descripcion)
       if(taskeliminada) 
            console.log(colors.green(`Tarea ${argv.descripcion} eliminada con exito`))
       else
            console.log(colors.red("tarea no econtrada"))
       
    break
    default:
        console.log("No corresponde a ninguna acción")
        break;
}
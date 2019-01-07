const fs = require('fs')


let listToDo = [] 

let saveListToDo = () => {

    let data = JSON.stringify(listToDo)
    fs.writeFile(`db/db.json`, data, (err) => {
        if (err) 
            console.log(err)
        
      });
}

const readArchive = () => {

    try {
        listToDo = require('../db/db.json')    
    } catch (error) {
        listToDo = []
    }
    
}

const crear = (description) => {
    
    readArchive()
    
    let task = {
        description, 
        complete: false
    }

    listToDo.push(task)

    saveListToDo()

    return task
}

const getList = () =>{
    readArchive()
    return listToDo
    
}

const actualizar = (description, completed = true) =>{
    readArchive()

    let index = listToDo.findIndex(task => task.description === description)
    if(index >= 0){
        listToDo[index].complete = completed
        saveListToDo()
        return true
    }else{
        return false
    }
    
}

const deleteTask = (description) => {
    readArchive()
    let index = listToDo.findIndex(task => task.description === description)
    
    if(index >= 0){
        listToDo.splice(index, 1)
        saveListToDo()
        return true
    }else{
        return false
    }
    
}

module.exports = {
    crear,
    getList, 
    actualizar, 
    deleteTask
}
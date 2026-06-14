//Ejercicio 5: Gestión de Tareas Pendientes
const tareas = [
    {
        'descripcion': 'Ejercicio 1',
        'completada': true
    },
    {
        'descripcion': 'Ejercicio 2',
        'completada': true
    },
    {
        'descripcion': 'Ejercicio 3',
        'completada': false
    },
    {
        'descripcion': 'Ejercicio 4',
        'completada': false
    }
]

const agregarTarea = (descripcion) => {
    tareas.push({
        descripcion,
        'completada': false
    })
}

const marcarTareaComoCompletada = (descripcion) => {
    tareas.forEach(tarea =>{
        if(tarea.descripcion === descripcion){
            return tarea.completada = true
        }
    })
}

const listarTareasPendientes = () => {
    tareas.forEach(tarea =>{
        if(!tarea.completada ){
            return console.log(`Tarea: ${tarea.descripcion} pendiente`)
        }
    })
}
const listarTareasCompletadas = () => {
    tareas.forEach(tarea =>{
        if(tarea.completada){
            return console.log(`Tarea: ${tarea.descripcion} completada`)
        }
    })
}

agregarTarea('Ejercicio 5')
agregarTarea('Llamar al médico')
marcarTareaComoCompletada('Ejercicio 5')
marcarTareaComoCompletada('Llamar al médico')
listarTareasPendientes();
listarTareasCompletadas();
console.log(tareas)

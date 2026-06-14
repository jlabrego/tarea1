const consultarBaseDeDatos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                const numero = Math.floor(Math.random() * 10);
                if(numero % 2 === 0){
                    resolve('Consulta exitosa')
                }
                else{
                    reject('Error en la consulta')
                }
        },3000)
        
    })
}
//Ejercicio 3: Uso de async y await para Manejar Promesas
const ejecutarConsulta = async () => {
    try {
        const resultado = await consultarBaseDeDatos()
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}
ejecutarConsulta()
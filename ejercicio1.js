//Utilice fetch para obtener una lista de usuarios desde la API 
/*fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) => {
    console.error('Error:', error);
  });*/

const getAllNamesandEmails = async()  => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok) return
            const data = await response.json()
             data.forEach((user) => {
                console.log(`Nombre:${user.name} , Email: ${user.email}`)
            })
         return data
    } 
    catch {
        return null
    } 
}
const names = await getAllNamesandEmails()

const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 1. Hacer una funcion "ordenarAlfabeticamente" que reciba un array y lo retorne ordenado alfabeticamente. 

// const ordenarAlfabeticamente = (array) => {
//     return array.sort()
// }

// console.log("Ordenar alfabeticamente:")
// console.log(ordenarAlfabeticamente(moana))
// console.log(ordenarAlfabeticamente(frozen))


// 2. Hacer una funcion "revertirOrden" que reciba un array y retorne sus elementos en orden inverso. 

// const revertirOrden = (array) => {
//     return array.reverse()
// }

// console.log("Revertir orden:")
// console.log(revertirOrden(moana))
// console.log(revertirOrden(frozen))


// 3. Hacer una funcion "incluyeNombre" que reciba un array y un string y retorne true si el array incluye al string, o false en caso contrario. 

// const incluyeNombre = (array, nombre) => {
//     return array.includes(nombre)
// }

// console.log("Incluye nombre:")
// console.log(incluyeNombre(moana, "Ana"))
// console.log(incluyeNombre(frozen, "Ana"))

// 4. Hacer una funcion "ultimosDos" que reciba un array y retorne un array con los ultimos dos elementos del original. 

// const ultimosDos = (array) => {
//     largoArray= array.length - 2
//     return array.slice(largoArray)
// }

// console.log("Ultimos dos:")
// console.log(ultimosDos(moana)) 
// console.log(ultimosDos(frozen))

// 5. Hacer una función "conservarSoloConA" que reciba un array y retorne un nuevo array compuesto solo por los elementos del original que contienen la letra "A". 

const conservarSoloConA = (array) => {
    let arrayNuevo = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("a")) {
            arrayNuevo.push(array[i])
        }
    }
    return arrayNuevo
}

console.log(conservarSoloConA(moana)) 
console.log(conservarSoloConA(frozen))


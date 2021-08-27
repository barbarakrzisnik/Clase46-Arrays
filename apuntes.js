// Mas metodos de arrays


//repaso de splice y slice

//Una caracteristica mas del splice, es que retorna lo que saca y tambien como queda el array

// lo que retorna el metodo y lo que le hace al array original son dos cosas distintas

//CONCAT
//Concatenar dos arrays
//Recibe como parametro el nuevo array

const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

console.log(moana.concat(["Ana, Elsa, Olaf"]))

//No modifica el array original

const alumnasAnsiosas = ["Sofi","Kari"]
console.log(moana.concat(alumnasAnsiosas))
//tmb puedo concatenar desde una variable


//INCLUDES
//Retorna true si el array contiene el parametro que le estoy pasando. Si no, false

moana.includes("Ana") // false
moana.includes("Tamatoa") // true

//JOIN 
//A partir de un array retorna un string con los elementos  unidos por el parametro

console.log(moana.join(" - "))
// Resultado: "Moana - Tamatoa - Maui - Hei Hei"
//No modifica el array original

//REVERSE
//no recibe parametros
//modifica el array original
//invierte el orden de los elemntos del array
//Retorna el array invertido

moana.reverse()

//SORT
//Ordena alfabeticamente
//Modifica el array original
//No recibe parametros
//Solo ordena alfabeticamente, solo strings
//No puede ordenar numeros de mayor a menor. Da resultados extraños

moana.sort()

//Los metodos se concatenan
//Ejemplo

moana.sort().reverse()

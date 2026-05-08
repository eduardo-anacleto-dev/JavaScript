let valores = [3, 6, 8, 2, 5, 1]

// console.log (valores)

/*
console.log (valores[0])
console.log (valores[1])
console.log (valores[2])
console.log (valores[3])
console.log (valores[4])
console.log (valores[5])
*/

/*for (let pos= 0; pos < valores.length; pos ++) {
    console.log (valores[pos])
}   */


    // FORMA SIMPLIFICAFA DO CODIGO FOR PARA ARRAYS E OBJECTS
for (let pos in valores) {
    console.log(`a posicao ${pos} tem o numero ${valores [pos]}`)   
}


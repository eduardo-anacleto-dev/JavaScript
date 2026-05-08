let num = [5, 6, 2, 9,]

num.push(4)
num.sort()
let soma = 0

let pos = num.indexOf(6)
for (let index = 0; index < num.length; index++) {

    soma += num[index]
    console.log(`a soma de todos os numeros e ${soma}`)
}





let numeros = []
for (let index = 1; index <= 6; index++) {

    let n = Math.floor( Math.random() * 60)

    if(numeros.indexOf(n) === -1){
        numeros.push(n)
    }
    else{
        index--
    }
}
console.log(`Meus Números da sorte são ${numeros} !!!!`);

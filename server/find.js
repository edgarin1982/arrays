const numbers = [1,30,49,29,10,13]


let respfor = undefined
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if ( element === 29) {
        respfor = element  
        break;      
    }    
}
console.log('usando ciclo for', respfor );

//usando find

const resp1 = numbers.find(item => item === 29);
console.log('usando metodo find',resp1);

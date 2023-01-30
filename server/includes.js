const pets = ['cat', 'dog', 'bat'];


let includesArray = false;
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'cat') {
        includesArray = true;
        break;
               
    }    
}
console.log('usando for', includesArray);


const resp = pets.includes('cat')//no recibe una arrow function
console.log('con metodo includes', resp);



//const letras = ['a', 'b', 'c']

/* const newArray = [];
for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    newArray.push(element + '##')    
}
console.log('original', letras);
console.log('new', newArray); */
/* const newArray = letras.map(item => item + '##')
console.log('original', letras); */


function multiplyElements(array) {
  return array.map(item => (item * 2))
 
} 
console.log(multiplyElements([2,4,5,6,10]));  
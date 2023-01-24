const array = ['spray', 'limit', 'elite', 'exuberant']

const newArray = [];
for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (item.length >= 6 ) {
        newArray.push(item);
        
    }
    
}
console.log('newArray', newArray);
console.log('original', array);

const rta = array.filter(item => item.length >= 6);
console.log('rta', rta);
console.log('original', array);
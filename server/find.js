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

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const resp4 = products.findIndex(item => item.id === '🌭')
  console.log('find', resp4);

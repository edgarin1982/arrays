/* const numbers = [1, 30,  29, 10, 13]


let resp = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        resp = false
        
    }
        
}
console.log('usando ciclo for', resp);
const resp2 = numbers.every(item => item <= 40 )
console.log('respuesta con every', resp2);
 */
const team = [
    {
      name: "Nicolas",
      age: 11,
    },
    {
      name: "Andrea",
      age: 10,
    },
    {
      name: "Zulema",
      age: 10,
    },
    {
      name: "Santiago",
      age: 12,
    },
  ];
const resp3 = team.every(item => item.age <= 15)    

  console.log('every', resp3);
  //todos sean menor de 15
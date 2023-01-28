const numbers = [1, 2, 3, 100]


let resp = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        resp = true;
        break;        
    }    
}


const resp2 = numbers.some(item => item % 2 === 0)
//console.log(resp2, resp);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
       customerName: "Ericka",
       total: 60,
       delivered: true,
      },
      {
       customerName: "Nicolas",
       total: 550,
       delivered: false,
      },
      {
       customerName: "Nicolas",
       total: 6500,
       delivered: true,
      }
  ]
  const resp3 = orders.some(item => item.delivered )
  console.log(resp3);

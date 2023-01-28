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

  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  
  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };
  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

  const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
  }
  console.log('esta sobre puesto', isOverlap(newAppointment));

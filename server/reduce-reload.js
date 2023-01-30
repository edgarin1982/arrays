const items = [1,2,3,2,2,1,3,5,6,7]

const respuesta = items.reduce((objeto, item)=>{
  if (!objeto[item]) {
    objeto[item] = 1;    
  }else{
    objeto[item] = objeto[item] +1; 
  }
  return objeto;
},{}); 
console.log(respuesta);


const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const respuesta2 = data

  .map(item => item.level && item.name)
  .reduce((objeto, item)=>{
    if (!objeto[item]) {
      objeto[item] = 1;    
    }else{
      objeto[item] = objeto[item] +1; 
    }
    return objeto;
  },{}); 
  console.log(respuesta2);
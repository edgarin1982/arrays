const tareas = [
    'comer', 'dormir', 'limpiar', 'estudiar'
];
for (let index = 0; index < tareas.length; index++) {
    const element = tareas[index];
    console.log(element);
}
tareas.forEach(element => console.log(element[1]));
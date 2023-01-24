/* const tareas = [
    'comer', 'dormir', 'limpiar', 'estudiar'
];
for (let index = 0; index < tareas.length; index++) {
    const element = tareas[index];
    console.log(element);
}
tareas.forEach(element => console.log(element)); */

/* const arr = [8,1,3,2,4];
let target = 5;

function checkTarget(){
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      if(arr[i]+arr[j] === target){
        console.log(true)
      }
    }   
  }  
}
console.log(checkTarget(arr, target)); */

/* const parentesis = "";
function checkParenthesis(string){
    if(string === "()") {
        console.log(true);

} else{
    console.log(false);
}  

}
checkParenthesis("(())"); */

let string = '()'
function checkParenthesis(string) {
    pila = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            pila.push = string[i];     
            return true;       
        }else{
            if (pila <= 0) {
                return false;                
            }
            let ultimo = pila.pop(pila);
            if (string[i] === ')' && ultimo !== '(') {
                return false;                
            }
            if (pila > 0) {
                return false;                
            }else{
                return true;
            }
        }
        
    }
}
console.log(checkParenthesis(')(()()'))
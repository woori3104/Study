
type operation = 'add' | 'substract' | 'multiply' | 'remainder' | 'divide';

function calculate(operation:operation, num1:number, num2:number):number|undefined {
    if (operation == 'add')
        return num1+num2;
    else if (operation == 'substract') 
        return num1 - num2;
    else if (operation == 'multiply') 
        return num1 * num2;
    else if (operation == 'divide') 
        return num1 / num2;
    else if (operation == 'remainder') 
        return num1 / num2;
    return undefined;
}



/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

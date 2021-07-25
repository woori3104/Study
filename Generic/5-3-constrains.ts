interface IEmployee {
  pay(): void;
}

class FullTimeEmployee implements IEmployee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements IEmployee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: IEmployee): IEmployee {
  employee.pay();
  return employee;
}

function pay<T extends IEmployee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();
console.log(ellie.workFullTime());
console.log(bob.workPartTime());

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🐕',
};

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

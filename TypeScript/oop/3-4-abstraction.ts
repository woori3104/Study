{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface ICommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;

    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log(`heating up... 🔥`);
    }

    extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean() {
      console.log("cleaning the meachine");
    }
  }
  /*
const maker: ICoffeeMaker = CoffeeMaker.makeMachine(32);

const maker2:ICommercialCoffeeMaker = CoffeeMaker.makeMachine(32);
maker2.fillCoffeeBeans(32);
maker2.makeCoffee(2);
maker2.clean();
*/
  class AmateurUser {
    constructor(private machine: ICoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class proBarista {
    constructor(private machine: ICommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(30);
      this.machine.clean();
    }
  }

  const maker: CoffeeMaker = CoffeeMaker.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new proBarista(maker);

  //amateur.makeCoffee();
  pro.makeCoffee();
}

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?:boolean;
  };

  interface ICommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMaker implements ICommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;

    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
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

  class CafelatteMaker extends CoffeeMaker {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMaker {

    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar:true,
      };
    }
  }

  class CheapMilkSteamer {
    private streamMilk():void {
        console.log('Steaming some milk...');
    }
    makeMilk(cup:CoffeeCup):CoffeeCup {
        this.streamMilk();
        return {
            ...cup,
            hasMilk: true,
        };
      }
  }

  class AutomaticSugaMixer {
      private getSugar() {
          console.log('Getting some sugar from candy');
      }
      addSugar(cup:CoffeeCup):CoffeeCup {
        return {
            ...cup, 
            hasMilk:true,
            hasSugar:true,
        };
      }
  }

}

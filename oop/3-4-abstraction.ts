type CoffeeCup = {
    shots : number;
    hasMilk: boolean;
}; 

class CoffeeMaker {
    
    private static BEANS_GRAMM_PER_SHOT: number = 7; 

    private coffeeBeans : number = 0; 

    private constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans:number):CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans:number) {
        if (beans < 0) {
            throw new Error("value for beans should be greater than 0");
        }
        this.coffeeBeans += beans;
    }

    grindBeans(shots:number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            throw new Error("Not enough coffee beans!");
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    preheat():void {
        console.log(`heating up... 🔥`);
    }

    extract(shots:number):CoffeeCup {
        console.log(`pulling ${shots} shots... ☕️`);
        return {
            shots, 
            hasMilk:false,
        };
    }
    makeCoffee(shots: number):CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
    }
}
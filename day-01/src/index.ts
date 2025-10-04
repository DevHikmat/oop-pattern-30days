import { Cappuccino } from "./beverages/Cappuccino";
import { Espresso } from "./beverages/Espresso";
import { Latte } from "./beverages/Latte";
import { CoffeeMachine } from "./CoffeeMachine";


const machine = new CoffeeMachine(500, 200, 100);

console.log(machine.makeDrink(new Espresso()))
console.log(machine.makeDrink(new Latte()))
console.log(machine.makeDrink(new Cappuccino()))

console.log(machine.getStatus());
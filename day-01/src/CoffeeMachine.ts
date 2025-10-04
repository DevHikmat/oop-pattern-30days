import { IBeverage } from "./interfaces/IBevarage";

export class CoffeeMachine {
  private water: number;
  private milk: number;
  private coffee: number;
  constructor(water: number, milk: number, coffee: number) {
    this.water = water;
    this.milk = milk;
    this.coffee = coffee;
  }

  makeDrink(beverage: IBeverage): string {
    if (this.water < beverage.water) throw new Error("Not enough water!");
    if (this.milk < beverage.milk) throw new Error("Not enough milk!");
    if (this.coffee < beverage.coffee) throw new Error("Not enough coffee!");

    this.water -= beverage.water;
    this.milk -= beverage.milk;
    this.coffee -= beverage.coffee;

    return `☕ ${beverage.name} is ready!`;
  }
  getStatus() {
    return {
      water: this.water,
      milk: this.milk,
      coffee: this.coffee,
    };
  }
}

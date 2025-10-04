import { IBevarage } from "./interfaces/IBevarage";


export class CoffeeMachine {
  private water: number;
  private milk: number;
  private coffee: number;
  constructor(water: number, milk: number, coffee: number) {
    this.water = water;
    this.milk = milk;
    this.coffee = coffee;
  }

  makeDrink(bevarage: IBevarage) {
    if(this.water < bevarage.water) throw new Error("Mashinada suv qolmagan");
    if(this.milk < bevarage.milk) throw new Error("Mashinada sut qolmagan");
    if(this.coffee < bevarage.coffee) throw new Error("Mashinada coffee qolmagan");

    this.water -= bevarage.water;
    this.milk -= bevarage.milk;
    this.coffee -= bevarage.coffee;
    
    return `${bevarage.name} qahvasi tayyor`;
  }

  getStatus() {
    return {
      water: this.water,
      milk: this.milk,
      coffee: this.coffee
    }
  }
}
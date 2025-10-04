import { IBeverage } from "../interfaces/IBevarage";

export class Cappuccino implements IBeverage {
  name = "Cappuccino";
  water = 60;
  milk = 100;
  coffee = 18;
}

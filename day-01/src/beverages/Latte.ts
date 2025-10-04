import { IBeverage } from "../interfaces/IBevarage";

export class Latte implements IBeverage {
  name = "Latte";
  water = 30;
  milk = 150;
  coffee = 18;
}

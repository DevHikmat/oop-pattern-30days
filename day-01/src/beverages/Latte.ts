import { IBevarage } from "../interfaces/IBevarage";

export class Latte implements IBevarage{
    name = "Latte";
    water = 100;
    milk = 0;
    coffee = 50;
}
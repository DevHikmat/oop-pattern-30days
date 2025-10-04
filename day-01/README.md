# Day 01 – Coffee Machine ☕

## Overview

Day-01 challenge TypeScript va OOP fundamentals’ni amalda o‘rganishga qaratilgan.  
Bu mashqda siz:

- Interface (`IBeverage`) bilan ishlash
- Class va Encapsulation (`CoffeeMachine`)
- Polymorphism (har xil ichimlik obyektlarini qabul qilish)
- Exception Handling (`throw new Error`)  

… kabi konseptlarni amalda ko‘rishingiz mumkin.

---

## Project Structure



day-01/
├── src/
│ ├── interfaces/
│ │ └── IBeverage.ts
│ ├── beverages/
│ │ ├── Espresso.ts
│ │ ├── Latte.ts
│ │ └── Cappuccino.ts
│ ├── CoffeeMachine.ts
│ └── index.ts
└── tests/
└── CoffeeMachine.test.ts

## How to Run

1. Install dependencies:

```bash
npm install

npm run start:day1

npm run test:day1
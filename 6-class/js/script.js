/*
Создать класс car у которого есть марка, модель и пробег(все свойства приватные)
 и задаются в конструкторе
- сделать для него возможность менять пробег через get set
- добавить метод info, который выводит в консоль марку модель и пробег
 */

class Car {
    #make = '';
    #model = '';
    #mileage = 0;

    constructor(make, model, mileage) {
        this.#make = make;
        this.#model = model;
        this.mileage = mileage;
    }

    set mileage(mileage) {
        this.#mileage = mileage; 
    }

    get mileage() {
        return this.#mileage; 
    }

    info() {
        console.log(`Марка автомобиля: ${this.#make}, `);
        console.log(`модель: ${this.#model}, `);
        console.log(`пробег: ${this.mileage}, \n`);
    }
}

const nissan = new Car('Nissan', 'Taureg', 100);
nissan.mileage = 1000;
nissan.info();

const volvo = new Car('Volvo', 'Q3', 0);
volvo.info();
volvo.mileage = 980;
volvo.info();
console.log(volvo.mileage);


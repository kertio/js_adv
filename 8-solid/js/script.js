/**
 * Спроектировать класс Billing со свойством amount и методом calculateTotal
 * для расчета счета. Сделать разный calculateTotal для разных типов:
 * fixBilling - где нужно вернуть amount как результат (непонятно какой, ну допустим кол-во символов)
 * hourBilling - который считает amount * число часов
 * itemBilling - где считается amount * число элементов. 
 * Соблюдать принцип открытости\закрытости. 
 */

class Billing {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }

    calculateTotal(bill) {
        return this.amount;
    }

    get amount() {
        return this.#amount;
    }

    set amount(amount) {
        this.#amount = amount;
    }
}

class FixBilling extends Billing {
    constructor(string, amount) {
        super(amount);
        this.amount = amount * string.split('').length;
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(hour, amount) {
        super(amount);
        this.hours = hour * amount;
    }

    calculateTotal() {
        return this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(arr, amount) {
        super(amount);
        this.amount = [...arr].length * amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class OtherBilling {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }

    calculateTotal() {
        return this.#amount;
    }
}

const billings = [
    new Billing(100),
    new FixBilling('test', 10),
    new HourBilling(20, 15),
    new ItemBilling([1, 2, 3, 4], 200),
    new OtherBilling(100500)
];

function printTotal(bill) {
    return bill.calculateTotal();
}

for (bill of billings) {
    console.log(printTotal(bill));    
}





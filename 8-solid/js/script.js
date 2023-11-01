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

    calculateTotal() {
        return this.#amount;
    }
}

class FixBilling extends Billing {
    #fixAmount = 10;

    calculateTotal() {
        return super.calculateTotal() * this.#fixAmount;
    }
}

class HourBilling extends Billing {
    #hourAmount = 24;

    calculateTotal() {
        return super.calculateTotal() * this.#hourAmount;
    }
}

class ItemBilling extends Billing {
    #itemBilling = [10, 20, 30, 40, 50];

    calculateTotal() {
        return super.calculateTotal() * this.#itemBilling.length;
    }
}

const billings = [
    new Billing(1),
    new FixBilling(2),
    new HourBilling(3),
    new ItemBilling(4)
];

function printTotal(bill) {
    return bill.calculateTotal();
}

for (bill of billings) {
    console.log(printTotal(bill));    
}





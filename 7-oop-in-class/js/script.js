class Pers {
    #genus;
    #lang;

    constructor(genus, lang) {
        this.#genus = genus;
        this.#lang = lang;    
    }

    get genus() {
        return this.#genus;
    }

    get lang() {
        return this.#lang;
    }

    speak() {
        console.log(`Genus: ${this.genus}, lang: ${this.lang}`);
    }
}

class Ork extends Pers {
    #weapon;

    constructor(genus, lang, weapon) {
        super(genus, lang);
        this.#weapon = weapon;
    }

    get weapon() {
        return this.#weapon;
    }

    speak() {
        console.log(`Ork: род - ${this.genus}, язык - ${this.lang}`)
    }

    hit() {
        console.log(`Орк нанес удар орудием: ${this.weapon}`);
    }
}

class Elf extends Pers {
    #magic;

    constructor(genus, lang, magic) {
        super(genus, lang);
        this.#magic = magic;
    }

    get magic() {
        return this.#magic;
    }

    speak() {
        console.log(`Elf: род - ${this.genus}, язык - ${this.lang}`)
    }

    createMagic() {
        console.log(`Эльф создал заклинание: ${this.magic}`);
    }
}

const elf = new Elf('Эльф', 'Эльфийский', 'Защитный барьер');
const ork = new Ork('Орк', 'Оркский', 'Топор');

const perses = [elf, ork];
for (pers of perses) {
    pers.speak();
}

elf.createMagic();
ork.hit();
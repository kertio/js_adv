/**
 * Создать базовый класс персонажа с параметрами:
 * раса, имя, язык и метод - говорить(выводит язык и имя в консоль)
 * Создать класс орка, который наследуется от персонажа,
 * у которого есть оружие и который имеет метод удара
 * Создать класс эльфа, который наследуется от персонажа,
 * у которого есть тип заклинаний и метод - создать заклинание
 */

const Pers = function(genus, lang) {
    this.genus = genus;
    this.lang = lang;
}

Pers.prototype.speak = function() {
    console.log(`language: ${this.lang}, genus: ${this.genus}\n`);
}

const Ork = function(genus, lang, weapon) {
    Pers.call(this, genus, lang);
    this.weapon = weapon;
}

const Elf = function(genus, lang, magic) {
    Pers.call(this, genus, lang);
    this.magic = magic;
}

Ork.prototype = Object.create(Pers.prototype);
Ork.prototype.constructor = Ork;

Elf.prototype = Object.create(Pers.prototype);
Elf.prototype.constructor = Elf;

Ork.prototype.hit = function () {
    console.log('Орк ударил противника');
}

Elf.prototype.createMagic = function () {
    console.log('Эльф создал заклинание');
}

const ork = new Ork('Ork', 'ru', 'sword');
const elf = new Elf('Elf', 'en', 'Заклинание 1');

ork.speak();
ork.hit();

elf.speak();
elf.createMagic();

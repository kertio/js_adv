function validate(date) {
    // определить количество полных лет
    const yearsOld = new Date(date);
    const curDate = new Date();
    
    let maybeBirthDay = false;
    let fullYear = curDate.getFullYear() - yearsOld.getFullYear();

    // Если текущий месяц меньше месяца рождения, возраст уменьшить на 1
    if (curDate.getMonth() < yearsOld.getMonth()) {
        fullYear--;
        return fullYear < 14;
    } else if (curDate.getMonth() === yearsOld.getMonth()) {
        maybeBirthDay = true;
    }

    // если текущий день меньше дня рождения - год уменьшить на 1
    if (maybeBirthDay) {
        if (curDate.getDate() <= yearsOld.getDate()) {
            fullYear--;
            maybeBirthDay = true;
        }
    }
    
    return fullYear < 14;
}

console.log(validate('1979-10-21'));
console.log(validate('2000-10-19'));
console.log(validate('1954-10-16'));
console.log(validate('1959-06-15'));
console.log(validate('2001-01-21'));
console.log(validate('2010-12-19'));
console.log(validate('2012-03-16'));

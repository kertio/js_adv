function rand(d) {
    return Math.floor(Math.random() * d + 1);
}

function game(d) {
    const dice = d.replace(/[^0-9]/g, '');

    return rand(dice);
}

console.log(game('d4'));
console.log(game('d6'));
console.log(game('d8'));
console.log(game('d10'));
console.log(game('d12'));
console.log(game('d16'));
console.log(game('d20d'));
console.log(game('d0'));

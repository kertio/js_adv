function rand(d) {
    return Math.floor(Math.random() * d + 1);
}

function game(d) {
    let res = 0;

    switch (d) {
        case 'd4':
            res = rand(4);
            break;

        case 'd6':
            res = rand(6);
            break;

        case 'd8':
            res = rand(8);
            break;

        case 'd10':
            res = rand(10);
            break;

        case 'd12':
            res = rand(12);
            break;

        case 'd16':
            res = rand(16);
            break;

        case 'd20':
            res = rand(20);
            break;    
        default:
            break;
    }

    return res;
}

console.log(game('d4'));
console.log(game('d6'));
console.log(game('d8'));
console.log(game('d10'));
console.log(game('d12'));
console.log(game('d16'));
console.log(game('d20'));
console.log(game('d0'));

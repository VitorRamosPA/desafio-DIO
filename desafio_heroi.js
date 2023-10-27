let heroi= ['Goku', 11100]
let elo = ""

switch (true) {
    case heroi[1] <= 1000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Ferro');
        break;
    case heroi[1] > 1000 && heroi[1] <= 2000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Bronze');
        break;
    case heroi[1] > 2000 && heroi[1] <= 5000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Prata');
        break;
    case heroi[1] > 5000 && heroi[1] <= 7000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Ouro');
        break;
    case heroi[1] > 7000 && heroi[1] <= 8000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Platina');
        break;
    case heroi[1] > 8000 && heroi[1] <= 9000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Ascendente');
        break;
    case heroi[1] > 9000 && heroi[1] <= 11000:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é Imortal');
        break;
    default:
        console.log('O Herói de nome ' + heroi[0] + ' e seu nível é mais de 11000');
}

if (heroi[1] <= 1000) {
    elo = 'Ferro'
} else if (heroi[1] > 1000 && heroi[1] <= 2000) {
    elo = 'Bronze'
} else if (heroi[1] > 2000 && heroi[1] <= 5000) {
    elo = 'Prata'
} else if (heroi[1] > 5000 && heroi[1] <= 7000) {
    elo = 'Ouro'
} else if (heroi[1] > 7000 && heroi[1] <= 8000) {
    elo = 'Platina'
} else if (heroi[1] > 8000 && heroi[1] <= 9000) {
    elo = 'Ascendente'
} else if (heroi[1] > 9000 && heroi[1] <= 11000) {
    elo = 'Imortal'
} else {
    elo = 'mais de 11000'
}

console.log('O Herói de nome ' + heroi[0] + ' e seu nível é ' + elo);

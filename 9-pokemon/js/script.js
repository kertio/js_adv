// https://pokeapi.co/api/v2/pokemon/ditto

const req = new XMLHttpRequest();
req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
req.send();

req.addEventListener('error', (e) => {
    console.log(`${e.type}: ${e.loaded} bytes transferred\n`);
});

req.addEventListener('load', function () {
    if (this.status === 200) {
        const {abilities} = JSON.parse(this.responseText);
        const {url} = abilities[0].ability;
        
        req.open('GET', url + 1);
        req.send();
    
        req.addEventListener('load', function () {
            if (this.status === 200) {
                const {effect_entries} = JSON.parse(this.responseText);
                const {effect} = effect_entries.find(item => {
                    return item.language.name == 'en';
                });
                console.log(effect);
            } else {
                console.warn('Ошибка получения описания абилки');        
            }
        })
    } else {
        console.warn('Ошибка получения списка абилок');
    }
})

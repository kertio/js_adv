// https://pokeapi.co/api/v2/pokemon/ditto

const req = new XMLHttpRequest();
req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
req.send();

req.addEventListener('load', function() {
    const {abilities} = JSON.parse(this.responseText);
    const {url} = abilities[0].ability;
    
    req.open('GET', url);
    req.send();

    req.addEventListener('load', function() {
        const {effect_entries} = JSON.parse(this.responseText);
        
        const {effect} = effect_entries.find(item => {
            return item.language.name == 'en';
        });
        console.log(effect);
    })
})

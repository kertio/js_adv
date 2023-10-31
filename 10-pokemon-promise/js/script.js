const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

function fetchEffects(url) {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Ошибка получения данных по адресу: ' + url);
            }
       
            return res.json();
        });
}

fetchEffects(url)
    .then(({ abilities }) => {
        const {url}  = abilities[0].ability;

        fetchEffects(url)
            .then(({effect_entries}) => {
                const { effect } = effect_entries.find(item => item.language.name == 'en');
                console.log(effect);
            });
    })
    .catch(err => {
        console.error(err.message);
    });

const api = [
 'https://1dog.ceo/api/breeds/image/random',
 'https://catfact.ninja/fact',
 'https://api.coindesk.com/v1/bpi/currentprice.json',
 'https://www.boredapi.com/api/activity'
];

const arrPromises = [
    Promise.reject('Rejected'),
    new Promise((resolve, reject) => setTimeout(resolve, 1000, 'SetTimeout resolved')),
    Promise.resolve('Resolved'),
    new Promise((resolve, reject) => setTimeout(reject, 1000)),
    new Promise((resolve, reject) => setTimeout(resolve, 500, 'SetTimeout resolved 2')),
]

const race = function(arr) {
    const successPromise = Promise.allSettled(arr)
                .then(element => element.find(data => data.status == 'fulfilled'));

    return successPromise;
}

race(api.map(element => fetch(element)))
    .then(data => {
         data.value.json().then(data => console.log(data));
    })
    .catch(err => console.log(err));

race(arrPromises)
    .then(data => console.log(data.value));
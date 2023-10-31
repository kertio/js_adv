/*
 * Сделать функцию получения координат пользователя, используя
 * geolocation API, но преобразовав его в Promise
 * 
 * navigator.geolocation.getCurrentPosition((position) => {
 *  doSomething(position.coords.latitude, position.coords.longitude);
 * }) ;
 */

function getLocation () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position);
            }, 
            (err) => {
                reject(err);
        });
    })
};

getLocation()
    .then(position => {
        console.log(`Широта: ${position.coords.latitude}`);
        console.log(`Долгота: ${position.coords.longitude}`);
    })
    .catch(err => {
        console.log('Ошибка получения данных:');
        console.log(`Код ошибки: ${err.code}, Описание ошибки: ${err.message}`);
    })
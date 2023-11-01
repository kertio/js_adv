/**
 * Сделать 5 кнопок с текстом "нажми меня" и div, где отображается
 * число нажатий (по умолчанию 0)
 * 
 * - При нажатии кнопки, текст на ней меняется на "Нажата". 
 *      у всех остальных - "Нажми меня"
 * 
 *  - С нажатием любой кнопки счетчик увеличивается на 1
 */

const label = document.querySelector('.label');
const wrapper = document.querySelector('.wrapper');
const buttons = wrapper.querySelectorAll('.btn');

wrapper.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    for (const button of buttons) {
        if (button == e.target) {
            button.innerHTML = 'Нажата';    
            label.innerHTML = Number(label.innerHTML) + 1;
        } else {
            button.innerHTML = 'Нажми меня';
        }
    }    
})
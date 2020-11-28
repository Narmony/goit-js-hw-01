// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
'use strict';
let country = prompt('Укажите страну доставки');

let deliveryPrice;
let message;
if (country === null) {
    message = 'Отменено пользователем!';
} else {
    country = country.toLowerCase();
    switch (country) {
        case 'Китай'.toLowerCase():
            deliveryPrice = 100;
            message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
            break;

        case 'Чили'.toLowerCase():
            deliveryPrice = 250;
            message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
            break;
    
        case 'Австралия'.toLowerCase():
            deliveryPrice = 170;
            message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
            break;
    
        case 'Индия'.toLowerCase():
            deliveryPrice = 80;
            message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
            break;
    
        case 'Ямайка'.toLowerCase():
            deliveryPrice = 120;
            message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
            break;

        default:
            message = 'В вашей стране доставка не доступна';
    }
}
alert(message);
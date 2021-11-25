"use strict";
// alert ("Используется строгий режим!");

objects()
function objects() {
    let user = {
        name: "Bob",
        age: 30,
        isAdmin: true,
        "likes birds": true
    }
    let key = "likes birds";

    // alert(user.isAdmin)
    // delete user.isAdmin  // Удаление свойства объекта
    // alert(user.isAdmin)
    //
    // alert(user["likes birds"]) // Имя свойства состоит из нескольких слов, обращение через []
    // alert(user[key])           // или имя свойства это результат выражения

    // Вычисляемое свойство, задаётся с помощью квадратных скобок
    let fruit = prompt("Какой фрукт купить?", "apple");
    let bag = {
        [fruit]: 5, // имя свойства будет взято из переменной fruit
    };
    // или так
    // bag[fruit] = 5;

//    alert( bag.apple ); // 5, если fruit="apple"

    // Краткая запись свойств если их имя совпадает с именем переменной
    function makeUser(name, age) {
        return {
            name, // то же самое, что и name: name
            age   // то же самое, что и age: age
            // ...
        };
    }

    // Имя свойства преобразуется к типу строка (если оно не типа Object)
    let obj = {
        0: "Тест" // то же самое что и "0": "Тест"
    };

    // Свойство __proto__ всегда имеет тип Object

    // in - Проверка существования свойства
    // alert( "age" in user ); // true, user.age существует
    // alert( "blabla" in user ); // false, user.blabla не существует

    // цикл перебора свойств объекта
    // for (let key in user) {
    //     alert( key );  // name, age, isAdmin
    //     alert( user[key] ); // John, 30, true
    // }

    // Клонирование и объединение объектов
    // Object.assign(dest, [src1, src2, src3...])

}

//simpleNumbers()
function simpleNumbers() {

    let result = "1"
    let max = +prompt("Введите максимальное число", "10")

    outer:
    for (let i = 2; i <= max; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue outer;
        }
        result += "," + i

    }
    alert(result)
}


//logicalOperators();
function logicalOperators() {
    let name = ""
    let password = ""

    name = prompt("Кто там?", "")
    if (name) {
        if (name !== "Админ") {
            alert("Я вас не знаю")
        } else {
            password = prompt("Введите пароль")
            if (password) {
                if (password !== "Я Главный") {
                    alert("Неверный пароль")
                } else {
                    alert("Здравствуйте!")
                }
            }
        }
    }
}



function f1() {


// Объявление переменной
// let message;
// message = 'Hello, World!';
// alert(message);

// let переменная = 'Переменная русскими буквами, можно, но не нужно!';
// alert('переменная');

// Константы
    const COLOR_BLUE = "#00F";
    const JS_TYPES = `"В JavaScript есть 8 основных типов.
number для любых чисел, целочисленные значения ограничены диапазоном ±(2**53-1).
bigint для целых чисел произвольной длины, заканчивается символом n, например 12345678643431n
string
boolean
null для неизвестных значений
undefined для неприсвоенных значений
object для более сложных структур данных
symbol для уникальных идентификаторов. "
`;
//alert(JS_TYPES);

// let result = prompt("Input: ", "123");
// alert(result);

// let isTrue = confirm("Is it true?");
// alert (isTrue);

// Преобразование типов
    const TYPE_CONVERSIONS = `"Строковое String(value)
Числовое Number(value) или +value
undefined -> NaN
null -> 0
true/false -> 1/0
srtring -> Пробельные символы по краям обрезаются (пробел, табуляция, перевод строки),
           пустая строка -> 0
           не пустая строка -> число или NaN

Логическое Boolean(value) или !!value
    0, NaN, undefined, null, '' -> false
    иначе -> true ('0', ' ' -> true)
"`;
// alert(TYPE_CONVERSIONS);

// Оператаор объединения с null
// result = a ?? b
// всё равно что
// result = (a !== null && a !== undefined) ? a : b;

// alert("typeof 10n = " + typeof 10n);
// alert("typeof undefined = " + typeof undefined);
    alert("typeof Math  = " + typeof Math);
//alert("typeof null = " + typeof null); // = object
}
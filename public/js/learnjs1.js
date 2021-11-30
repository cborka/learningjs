"use strict";
// alert ("Используется строгий режим!");

// arrays()
//arrays2()
//arrays3()


alert([5, 2, 1, -10, 8].sort((a, b) => b - a))

//alert(filterRange([5, 3, 8, 1], 1, 4))
function filterRange(arr, min, max) {
    return arr.filter((val) => val >= min && val <= max)
}

//alert(camelize('qwer-asdf-zxcv'))
function camelize(defisString) {
    let arr = defisString.split('-');
    return(arr.reduce((pv, cv) => pv + cv[0].toUpperCase()+cv.slice(1), ''))
}

function arrays3() {
    let arr = []

    do {

        let number = prompt('Number? ', '0')
        if (number === null) break

        arr.push(+number)

    } while (true)

    alert('---')

    let sum = 0
    for(let n of arr) {
        sum += n
    }

    alert(sum)
}


function arrays2() {
    let arr = ['Джаз', 'Блюз']
    alert(arr)
    arr.push('Рок-н-ролл')
    alert(arr)
    arr[Math.floor(arr.length / 2)] = 'Классика'
    alert(arr)
    alert(arr.shift())
    alert(arr)
    arr.unshift('Рэп','Рэгги')
    alert(arr)


}

function arrays() {

    //let arr = new Array();
    //let arr = [];

    let fruits = ["Яблоко", "Апельсин", "Слива"];
    alert( fruits[0] ); // Яблоко
    alert( fruits[1] ); // Апельсин
    alert( fruits[2] ); // Слива
    alert( fruits.length );
    alert( fruits ); // Яблоко, Апельсин, Слива

    // push     добавляет элемент в конец.
    // shift    удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
    // pop      удаляет последний элемент и возвращает его
    // unshift  Добавляет элемент в начало массива
    // можно добавлять сразу несколько элементов

    // цикл по массиву
    for (let i = 0; i < arr.length; i++) {
        alert( arr[i] );
    }
    // проходит по значениям
    for (let fruit of fruits) {
        alert( fruit );
    }
    // работает как с объектом, НЕ РЕКОМЕНДУЕТСЯ
    for (let key in arr) {
        alert( arr[key] ); // Яблоко, Апельсин, Груша
    }

    arr.length = 2; // укорачиваем до двух элементов, операция НЕОБРАТИМА
    arr.length = 0; // очистка массива

}

//strings()
function strings() {
    let str = `Hello`;

// получаем первый символ
    alert( str[0] ); // H
    alert( str.charAt(0) ); // H

// получаем последний символ
    alert( str[str.length - 1] ); // o

    alert( str[1000] ); // undefined
    alert( str.charAt(1000) ); // '' (пустая строка)

    // Цикл по символам строки
    for (let char of "Hello") {
        alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
    }

    alert( 'Interface'.toUpperCase() ); // INTERFACE
    alert( 'Interface'.toLowerCase() ); // interface

    // Поиск внутри строки
    // str.indexOf(substr, pos)
    // str.lastIndexOf(substr, position)

    // Найти ВСЕ вхождения подстроки
    //let
        str = 'Ослик Иа-Иа посмотрел на виадук';
    let target = 'Иа'; // цель поиска
    let pos = 0;
    while (true) {
        let foundPos = str.indexOf(target, pos);
        if (foundPos == -1)
            break;
        alert( `Найдено тут: ${foundPos}` );
        pos = foundPos + 1; // продолжаем со следующей позиции
    }

    // str.includes(substr, pos) - возвращает true, если в строке str есть подстрока substr, либо false, если нет.
    alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
    alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

    // 3 метода для получения подстроки: substring, substr и slice
    // slice(start, end)	    от start до end (не включая end)	можно передавать отрицательные значения
    // substring(start, end)	между start и end	                отрицательные значения равнозначны 0
    // substr(start, length)	length символов, начиная от start	значение start может быть отрицательным

// Отрицательные параметры - начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// alert( "stringify".slice(-4, -1) ); // gif

    // str.codePointAt(pos)       - Возвращает код для символа, находящегося на позиции pos
    // String.fromCodePoint(code) - Создаёт символ по его коду code

    // str.localeCompare(str2) - возвращает число (1, 0, -1), которое показывает, какая строка больше в соответствии с правилами языка

    alert( 'S\u0307' ); // Ṡ

}

//numbers()
function numbers() {

//    1e3 == 1 * 1000

        // toString
//     let num = 255;
//     alert( num.toString(16) );  // ff
//     alert( num.toString(2) );   // 11111111
//     alert( 123456..toString(36) ); // 2n9c // Две точки для вызова метода

    // Округление
    // Math.floor
    // Math.ceil
    // Math.round
    // Math.trunc (не поддерживается в Internet Explorer)

    // let num = 1.23456;
    // alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

    // let num = 12.34;
    // alert( num.toFixed(1) ); // "12.3"

    // Infinity, NaN,
    // alert( 1e500 ); // Infinity
    // alert( 0.1 + 0.2 ); // 0.30000000000000004
    //
    // let sum = 0.1 + 0.2;
    // alert( +sum.toFixed(2) ); // 0.3


    // alert( isNaN(NaN) ); // true
    // alert( isNaN("str") ); // true
    // alert( NaN === NaN ); // false
    //
    // alert( isFinite("15") ); // true
    // alert( isFinite("str") ); // false, потому что специальное значение: NaN
    // alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

    // Object.is(NaN, NaN) === true
    // Object.is(0, -0) === false

    // parseInt, parseFloat
    // alert( parseInt('100px') ); // 100
    // alert( parseFloat('12.5em') ); // 12.5
    //
    // alert( parseInt('0xff', 16) ); // 255
    // alert( parseInt('ff', 16) ); // 255, без 0x тоже работает
    // alert( parseInt('2n9c', 36) ); // 123456

    // Math
    // alert( Math.random() ); // 0.1234567894322
    // alert( Math.max(3, 5, -10, 0, 1) ); // 5
    // alert( Math.min(1, 2) ); // 1
    // alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024
}

// let str = "Привет";
// alert( str.toUpperCase() ); // ПРИВЕТ

//symbols()
function symbols() {

    let id = Symbol("idDD");
    alert(id.toString());
    alert(id.description);


    // Глобальные символы
    let sym = Symbol.for("name"); // получаем символ по имени
    alert(Symbol.keyFor(sym));         // получаем имя по символу // name
}

// Опциональная цепочка
// let user = {}; // пользователь без адреса
// alert( user?.address?.street ); // undefined (без ошибки)
// delete user?.name; // Удалить user.name, если пользователь существует



//this_value()
function this_value() {


    // function Accum(startinValue) {
    //     this.value = startinValue;
    //     this.read = function () {
    //         this.value += +prompt('Add ', '1')
    //     }
    // }
    // let accum = new Accum(3);
    //
    // accum.read()
    // accum.read()
    // alert(accum.value)


    // let ladder = {
    //     step: 0,
    //     up() {
    //         this.step++;
    //         return this;
    //     },
    //     down() {
    //         this.step--;
    //         return this;
    //     },
    //     showStep: function() { // показывает текущую ступеньку
    //         alert( this.step );
    //         return this;
    //     }
    // };
    // ladder.up().up().showStep().down().showStep();



    // let calc = {
    //     x: 0,
    //     y: 0,
    //     read () {
    //         this.x = +prompt("Введите первый операнд: ", "2");
    //         this.y = +prompt("Введите второй операнд: ", "3");
    //     },
    //     sum () {
    //         return this.x + this.y
    //     },
    //     mul () {
    //         return this.x * this.y
    //     },
    // }
    // calc.read()
    // alert(calc.mul())
    // alert(calc.sum())


    // function makeUser() {
    //     return {
    //         name: "Джон",
    //         ref() {
    //             return this
    //         }
    //     };
    // };
    // let user = makeUser();
    // alert(user.ref().name);
}
//objects()
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
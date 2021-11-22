"use strict";
// alert ("Используется строгий режим!");

// Объявление переменной
// let message;
// message = 'Hello, World!';
// alert(message);

// let переменная = 'Переменная русскими буквами, можно, но не нужно!';
// alert('переменная');

// Константы
const COLOR_BLUE = "#00F";
const JS_TYPES =  `"В JavaScript есть 8 основных типов.
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
alert("typeof Math  = " + typeof Math );
//alert("typeof null = " + typeof null); // = object

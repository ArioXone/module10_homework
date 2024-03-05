/*
Раздел 10.4 - Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

let myString = "Пример строки";

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversedString = reverseString(myString);
console.log(reversedString);

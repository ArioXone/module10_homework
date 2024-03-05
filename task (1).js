/*
Раздел 10.3 - Задание 1

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*/

let input = +prompt("Введите число");
if (typeof input === "number" && !isNaN(input)) {
  if (input % 2 === 0) {
    console.log(input + " - четное число");
  } else {
    console.log(input + " - нечетное число");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}

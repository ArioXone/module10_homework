/*
Раздел 10.4 - Задание 8

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.
*/

let map = new Map([
  ["apple", "greeen"],
  ["banana", "yellow"],
  ["strawberry", "red"],
]);

map.forEach((value, key) => {
  console.log(`Ключ — ${key}, значение — ${value}`);
});

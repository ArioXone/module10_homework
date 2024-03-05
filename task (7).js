/*
Раздел 10.4 - Задание 7

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/

let countArray = [0, 1, 2, "a", null, 3, 4, "b", 5];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let notNumberCount = 0;

countArray.forEach((element) => {
  if (typeof element === "number" && !isNaN(element)) {
    if (element === 0) {
      zeroCount++;
    } else if (element % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  } else {
    notNumberCount++;
  }
});

console.log(`Чётных элементов: ${evenCount}`);
console.log(`Нечётных элементов: ${oddCount}`);
console.log(`Нулей: ${zeroCount}`);
console.log(`Элементов, не являющихся числом: ${notNumberCount}`);

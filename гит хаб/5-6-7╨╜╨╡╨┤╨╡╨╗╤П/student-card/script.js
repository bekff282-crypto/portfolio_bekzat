
// Создание переменных
let studentName = "Александр";
let age = 18;
let group = "ИС-23";
let averageGrade = 4.5;
let isStudent = true;
let scholarship;
let graduationDate = null;

// Проверка первоначальных типов данных
console.log("Первоначальные типы данных:");

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof group);
console.log(typeof averageGrade);
console.log(typeof isStudent);
console.log(typeof scholarship);
console.log(typeof graduationDate);

// Изменение значений переменных
age = 19;
averageGrade = 4.8;
scholarship = 25000;
graduationDate = "Июнь 2027";
isStudent = false;

// Повторная проверка типов данных
console.log("Типы данных после изменений:");

console.log(typeof age);
console.log(typeof averageGrade);
console.log(typeof scholarship);
console.log(typeof graduationDate);
console.log(typeof isStudent);

// Вывод информации на страницу
document.getElementById("studentInfo").innerHTML =
    "<p><b>Имя:</b> " + studentName + "</p>" +
    "<p><b>Возраст:</b> " + age + "</p>" +
    "<p><b>Группа:</b> " + group + "</p>" +
    "<p><b>Средний балл:</b> " + averageGrade + "</p>" +
   "<p><b>Статус обучения:</b> " + (isStudent ? "Обучается" : "Не обучается") + "</p>" +
    "<p><b>Стипендия:</b> " + scholarship + " тенге</p>" +
    "<p><b>Дата выпуска:</b> " + graduationDate + "</p>";

// Дополнительные переменные
let firstValue = 20;
let secondValue = "20";
let thirdValue = true;
let fourthValue = false;

// Проверка типов дополнительных переменных
console.log("Дополнительные типы данных:");

console.log(typeof firstValue);
console.log(typeof secondValue);
console.log(typeof thirdValue);
console.log(typeof fourthValue);

// Операции сложения
console.log("Результаты сложения:");

console.log(firstValue + secondValue);
console.log(firstValue + thirdValue);
console.log(firstValue + fourthValue);


// Информация о студенте
let studentName = "Александр";
let grade1 = 85;
let grade2 = 70;
let grade3 = 90;
let totalTasks = 10;
let completedTasks = 8;
let passingScore = 70;

// Арифметические операторы
let totalGrade = grade1 + grade2 + grade3;
let averageGrade = totalGrade / 3;
let remainingTasks = totalTasks - completedTasks;
let completionPercent = (completedTasks / totalTasks) * 100;
let gradeRemainder = totalGrade % 3;

// Вывод первоначальных результатов
console.log("Первоначальные результаты:");
console.log("Сумма оценок:", totalGrade);
console.log("Средний балл:", averageGrade);
console.log("Невыполненные задания:", remainingTasks);
console.log("Процент выполнения:", completionPercent + "%");
console.log("Остаток от деления:", gradeRemainder);

// Операторы присваивания
completedTasks += 1;

let bonusPoints = 10;
grade3 += bonusPoints;

let penaltyPoints = 5;
grade2 -= penaltyPoints;

// Повторные вычисления
totalGrade = grade1 + grade2 + grade3;
averageGrade = totalGrade / 3;
remainingTasks = totalTasks - completedTasks;
completionPercent = (completedTasks / totalTasks) * 100;

console.log("Результаты после изменений:");
console.log("Сумма оценок:", totalGrade);
console.log("Средний балл:", averageGrade);
console.log("Невыполненные задания:", remainingTasks);
console.log("Процент выполнения:", completionPercent + "%");

// Проверка операторов *= и /=
let testNumber = 20;

testNumber *= 2;
console.log("После умножения:", testNumber);

testNumber /= 2;
console.log("После деления:", testNumber);

// Операторы сравнения
let isPassed = averageGrade >= passingScore;
let isExcellent = averageGrade > 85;
let hasRemainingTasks = remainingTasks > 0;
let allTasksCompleted = completedTasks === totalTasks;
let isBelowMaximum = averageGrade < 100;
let isNotMinimum = averageGrade !== 0;

console.log("Результаты сравнений:");
console.log("Успешная сдача:", isPassed);
console.log("Отличный результат:", isExcellent);
console.log("Есть невыполненные задания:", hasRemainingTasks);
console.log("Все задания выполнены:", allTasksCompleted);
console.log("Средний балл меньше 100:", isBelowMaximum);
console.log("Средний балл не равен 0:", isNotMinimum);

// Логические операторы
let canPass = averageGrade >= 70 && completedTasks >= 8;

let needsHelp = averageGrade < 70 || completedTasks < 5;

let hasIncompleteWork = !allTasksCompleted;

let getsBonus = averageGrade >= 85 && allTasksCompleted;

console.log("Логические проверки:");
console.log("Может успешно завершить обучение:", canPass);
console.log("Нужна дополнительная помощь:", needsHelp);
console.log("Есть незавершённые задания:", hasIncompleteWork);
console.log("Получает дополнительное поощрение:", getsBonus);

// Вывод результатов на веб-страницу
document.getElementById("result").innerHTML =

    "<h2>Информация о студенте</h2>" +
    "<p><b>Имя:</b> " + studentName + "</p>" +
    "<p><b>Оценка 1:</b> " + grade1 + "</p>" +
    "<p><b>Оценка 2:</b> " + grade2 + "</p>" +
    "<p><b>Оценка 3:</b> " + grade3 + "</p>" +

    "<h2>Результаты вычислений</h2>" +
    "<p><b>Сумма оценок:</b> " + totalGrade + "</p>" +
    "<p><b>Средний балл:</b> " + averageGrade.toFixed(2) + "</p>" +
    "<p><b>Невыполненные задания:</b> " + remainingTasks + "</p>" +
    "<p><b>Процент выполнения:</b> " + completionPercent + "%</p>" +
    "<p><b>Остаток от деления:</b> " + gradeRemainder + "</p>" +

    "<h2>Проверка условий</h2>" +
    "<p><b>Успешная сдача:</b> " + isPassed + "</p>" +
    "<p><b>Отличный результат:</b> " + isExcellent + "</p>" +
    "<p><b>Есть невыполненные задания:</b> " + hasRemainingTasks + "</p>" +
    "<p><b>Все задания выполнены:</b> " + allTasksCompleted + "</p>" +
    "<p><b>Средний балл меньше 100:</b> " + isBelowMaximum + "</p>" +
    "<p><b>Средний балл не равен 0:</b> " + isNotMinimum + "</p>" +

    "<h2>Логические операторы</h2>" +
    "<p><b>Может успешно завершить обучение:</b> " + canPass + "</p>" +
    "<p><b>Нужна дополнительная помощь:</b> " + needsHelp + "</p>" +
    "<p><b>Есть незавершённые задания:</b> " + hasIncompleteWork + "</p>" +
    "<p><b>Получает дополнительное поощрение:</b> " + getsBonus + "</p>" +

    "<h2>Операторы присваивания</h2>" +
    "<p><b>Тестовое число после *= и /=:</b> " + testNumber + "</p>";

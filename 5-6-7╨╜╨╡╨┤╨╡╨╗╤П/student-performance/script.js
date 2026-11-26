
// Функция проверки успеваемости
function checkPerformance() {

    // Получение данных из HTML
    let studentName = document.getElementById("studentName").value.trim();

    let grade1Text = document.getElementById("grade1").value;
    let grade2Text = document.getElementById("grade2").value;
    let grade3Text = document.getElementById("grade3").value;
    let tasksText = document.getElementById("completedTasks").value;

    // Проверка пустых полей
    if (
        studentName === "" ||
        grade1Text.trim() === "" ||
        grade2Text.trim() === "" ||
        grade3Text.trim() === "" ||
        tasksText.trim() === ""
    ) {
        document.getElementById("result").innerHTML =
            "<p class='error'>Ошибка! Заполните все поля.</p>";
        return;
    }

    // Преобразование значений в числа
    let grade1 = Number(grade1Text);
    let grade2 = Number(grade2Text);
    let grade3 = Number(grade3Text);
    let completedTasks = Number(tasksText);

    // Проверка правильности введённых данных
    if (
        Number.isNaN(grade1) ||
        Number.isNaN(grade2) ||
        Number.isNaN(grade3) ||
        Number.isNaN(completedTasks)
    ) {
        document.getElementById("result").innerHTML =
            "<p class='error'>Ошибка! Введите правильные числовые значения.</p>";
        return;
    }

    // Проверка диапазона оценок и заданий
    if (
        grade1 < 0 || grade1 > 100 ||
        grade2 < 0 || grade2 > 100 ||
        grade3 < 0 || grade3 > 100 ||
        completedTasks < 0 || completedTasks > 10 ||
        !Number.isInteger(completedTasks)
    ) {
        document.getElementById("result").innerHTML =
            "<p class='error'>Ошибка! Оценки должны быть от 0 до 100, а задания — от 0 до 10 целых чисел.</p>";
        return;
    }

    // Расчёт среднего балла
    let averageGrade = (grade1 + grade2 + grade3) / 3;

    // Определение уровня успеваемости
    let performanceLevel;

    if (averageGrade >= 90) {
        performanceLevel = "Отлично";
    } else if (averageGrade >= 75) {
        performanceLevel = "Хорошо";
    } else if (averageGrade >= 50) {
        performanceLevel = "Удовлетворительно";
    } else {
        performanceLevel = "Неудовлетворительно";
    }

    // Проверка права на стипендию
    let scholarshipStatus;

    if (averageGrade >= 75) {

        if (completedTasks === 10) {
            scholarshipStatus = "Студент может получить стипендию";
        } else {
            scholarshipStatus = "Необходимо завершить оставшиеся задания";
        }

    } else {
        scholarshipStatus = "Стипендия не назначается: средний балл ниже 75";
    }

    // Формирование рекомендаций с помощью switch
    let recommendation;

    switch (performanceLevel) {

        case "Отлично":
            recommendation = "Продолжайте обучение в том же темпе";
            break;

        case "Хорошо":
            recommendation = "Попробуйте улучшить результаты до отличного уровня";
            break;

        case "Удовлетворительно":
            recommendation = "Рекомендуется повторить сложные темы";
            break;

        case "Неудовлетворительно":
            recommendation = "Необходимо повторить материал и пересдать задания";
            break;

        default:
            recommendation = "Уровень не определён";
    }

    // Проверка академической задолженности
    let debtStatus = completedTasks === 10
        ? "Задолженностей нет"
        : "Есть невыполненные задания";

    // Количество невыполненных заданий
    let remainingTasks = 10 - completedTasks;

    // Вывод результатов в консоль
    console.log("Имя студента:", studentName);
    console.log("Средний балл:", averageGrade);
    console.log("Уровень успеваемости:", performanceLevel);
    console.log("Стипендия:", scholarshipStatus);
    console.log("Рекомендация:", recommendation);
    console.log("Академическая задолженность:", debtStatus);
    console.log("Невыполненные задания:", remainingTasks);

    // Вывод результатов на страницу
    document.getElementById("result").innerHTML =

        "<h2>Результаты студента</h2>" +

        "<p><b>Имя:</b> " + studentName + "</p>" +

        "<p><b>Оценка 1:</b> " + grade1 + "</p>" +

        "<p><b>Оценка 2:</b> " + grade2 + "</p>" +

        "<p><b>Оценка 3:</b> " + grade3 + "</p>" +

        "<p><b>Выполнено заданий:</b> " + completedTasks + " из 10</p>" +

        "<p><b>Средний балл:</b> " + averageGrade.toFixed(2) + "</p>" +

        "<h2>Успеваемость</h2>" +

        "<p><b>Уровень:</b> " + performanceLevel + "</p>" +

        "<p><b>Стипендия:</b> " + scholarshipStatus + "</p>" +

        "<p><b>Академическая задолженность:</b> " + debtStatus + "</p>" +

        "<p><b>Невыполненные задания:</b> " + remainingTasks + "</p>" +

        "<h2>Рекомендации</h2>" +

        "<p>" + recommendation + "</p>";
}

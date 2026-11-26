
// Массивы студентов и оценок
let students = [
    "Александр",
    "Мария",
    "Данияр",
    "Алина",
    "Руслан",
    "София",
    "Тимур",
    "Диана"
];

let grades = [85, 92, 45, 76, 60, 98, 35, 81];

// Проходной балл
let passingScore = 50;

// Проверка первого и последнего студента
console.log("Первый студент:", students[0], grades[0]);

console.log(
    "Последний студент:",
    students[students.length - 1],
    grades[grades.length - 1]
);

console.log("Количество студентов:", students.length);


// 1. Вывод журнала через цикл for
function showJournal() {

    let table = `
        <table>
            <tr>
                <th>№</th>
                <th>Студент</th>
                <th>Оценка</th>
                <th>Статус</th>
            </tr>
    `;

    for (let i = 0; i < students.length; i++) {

        let status;

        if (grades[i] >= passingScore) {
            status = "<span class='success'>Сдал</span>";
        } else {
            status = "<span class='error'>Не сдал</span>";
        }

        table += `
            <tr>
                <td>${i + 1}</td>
                <td>${students[i]}</td>
                <td>${grades[i]}</td>
                <td>${status}</td>
            </tr>
        `;
    }

    table += "</table>";

    document.getElementById("studentList").innerHTML = table;

    console.log("Журнал студентов выведен");
}


// 2. Расчёт статистики через цикл for
function calculateStatistics() {

    let totalScore = 0;
    let passedCount = 0;
    let failedCount = 0;

    for (let i = 0; i < grades.length; i++) {

        totalScore += grades[i];

        if (grades[i] >= passingScore) {
            passedCount++;
        } else {
            failedCount++;
        }
    }

    let averageGrade = totalScore / grades.length;

    document.getElementById("statistics").innerHTML =

        "<p><b>Количество студентов:</b> " + students.length + "</p>" +
        "<p><b>Сумма всех оценок:</b> " + totalScore + "</p>" +
        "<p><b>Средний балл группы:</b> " + averageGrade.toFixed(2) + "</p>" +
        "<p><b>Сдали предмет:</b> " + passedCount + "</p>" +
        "<p><b>Не сдали предмет:</b> " + failedCount + "</p>";

    console.log("Общая сумма оценок:", totalScore);
    console.log("Средний балл группы:", averageGrade);
    console.log("Сдали:", passedCount);
    console.log("Не сдали:", failedCount);
}


// 3. Поиск студента через цикл while
function searchStudent() {

    let studentNumber = Number(
        document.getElementById("studentNumber").value
    );

    let result = document.getElementById("searchResult");

    if (
        !Number.isInteger(studentNumber) ||
        studentNumber < 1 ||
        studentNumber > students.length
    ) {
        result.innerHTML =
            "<p class='error'>Ошибка! Введите целый номер от 1 до 8.</p>";

        return;
    }

    let i = 0;
    let found = false;

    while (i < students.length) {

        if (i + 1 === studentNumber) {

            result.innerHTML =
                "<p><b>Номер:</b> " + studentNumber + "</p>" +
                "<p><b>Имя студента:</b> " + students[i] + "</p>" +
                "<p><b>Оценка:</b> " + grades[i] + "</p>";

            found = true;

            break;
        }

        i++;
    }

    if (!found) {
        result.innerHTML = "<p>Студент не найден.</p>";
    }
}


// 4. Поиск первой неудовлетворительной оценки через break
function showFirstFailed() {

    let found = false;

    for (let i = 0; i < grades.length; i++) {

        if (grades[i] < passingScore) {

            document.getElementById("firstFailed").innerHTML =
                "<p class='error'><b>Первый студент с низкой оценкой:</b></p>" +
                "<p>Имя: " + students[i] + "</p>" +
                "<p>Оценка: " + grades[i] + "</p>";

            console.log(
                "Первая неудовлетворительная оценка:",
                students[i],
                grades[i]
            );

            found = true;

            break;
        }
    }

    if (!found) {
        document.getElementById("firstFailed").innerHTML =
            "<p class='success'>Неудовлетворительных оценок нет!</p>";
    }
}


// 5. Список сдавших студентов через continue
function showPassedStudents() {

    let list = "";

    for (let i = 0; i < grades.length; i++) {

        if (grades[i] < passingScore) {
            continue;
        }

        list +=
            "<p><b>" + students[i] + "</b> — " +
            grades[i] + " баллов</p>";
    }

    document.getElementById("passedStudents").innerHTML = list;
}


// 6. Исправление оценки через do...while
function correctGrade() {

    let studentIndex = -1;

    // Находим первого студента с оценкой ниже 50
    for (let i = 0; i < grades.length; i++) {

        if (grades[i] < passingScore) {
            studentIndex = i;
            break;
        }
    }

    if (studentIndex === -1) {
        alert("Нет студентов с неудовлетворительными оценками!");
        return;
    }

    let newGrade;
    let cancelled = false;

    do {

        let input = prompt(
            "Студент: " + students[studentIndex] +
            "\nСтарая оценка: " + grades[studentIndex] +
            "\nВведите новую оценку от 0 до 100:"
        );

        // Проверка отмены ввода
        if (input === null) {
            cancelled = true;
            break;
        }

        // Проверка пустого и неправильного ввода
        if (input.trim() === "") {
            newGrade = NaN;
        } else {
            newGrade = Number(input);
        }

        if (
            Number.isNaN(newGrade) ||
            newGrade < 0 ||
            newGrade > 100
        ) {
            alert("Ошибка! Введите число от 0 до 100.");
        }

    } while (
        Number.isNaN(newGrade) ||
        newGrade < 0 ||
        newGrade > 100
    );

    if (cancelled) {
        alert("Исправление оценки отменено.");
        return;
    }

    // Замена старой оценки
    grades[studentIndex] = newGrade;

    alert(
        "Оценка студента " + students[studentIndex] +
        " успешно изменена на " + newGrade
    );

    // Обновление всех результатов
    updatePage();
}


// 7. Обновление всей страницы
function updatePage() {

    showJournal();

    calculateStatistics();

    showFirstFailed();

    showPassedStudents();
}


// Запуск программы при открытии страницы
updatePage();

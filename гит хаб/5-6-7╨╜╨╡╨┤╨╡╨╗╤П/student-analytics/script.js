
// Массив студентов
let students = [
    { name: "Бекзат", grade: 95 },
    { name: "Арнур", grade: 73 },
    { name: "Амирхан", grade: 100 },
    { name: "Аяна", grade: 76 },
    { name: "Бекарыс", grade: 60 },
    { name: "Мирас", grade: 98 }
];

// Учебные задания
let tasks = [
    "Создать HTML-страницу",
    "Написать JavaScript-код",
    "Создать таблицу студентов",
    "Разработать веб-сайт",
    "Изучить массивы JavaScript",
    "Сделать форму регистрации"
];

// Сроки сдачи заданий
function getDateAfter(days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split("T")[0];
}

let assignments = [
    { name: "Практическая работа №1", date: getDateAfter(3) },
    { name: "Практическая работа №2", date: getDateAfter(-2) },
    { name: "Практическая работа №3", date: getDateAfter(7) }
];

// Отображение студентов
function showStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(function(student) {
        list.innerHTML += `
            <div class="student">
                <strong>${student.name}</strong>
                — Оценка: ${student.grade}
            </div>
        `;
    });
}

// Расчёт среднего балла и статистики
function calculateAverage() {
    let grades = students.map(student => student.grade);
    let sum = grades.reduce((total, grade) => total + grade, 0);
    let average = sum / students.length;

    let rounded = Math.round(average);
    let down = Math.floor(average);
    let up = Math.ceil(average);

    let maxGrade = Math.max(...grades);
    let minGrade = Math.min(...grades);

    let bestStudents = students.filter(student => student.grade === maxGrade);
    let worstStudents = students.filter(student => student.grade === minGrade);

    let passed = students.filter(student => student.grade >= 50).length;
    let percentage = (passed / students.length) * 100;

    document.getElementById("statistics").innerHTML = `
        <div class="result">
            <h3>Результаты вычислений</h3>
            Сумма оценок: ${sum}<br>
            Средний балл: ${average.toFixed(2)}<br>
            Math.round(): ${rounded}<br>
            Math.floor(): ${down}<br>
            Math.ceil(): ${up}<br>
            <hr>
            Максимальная оценка: ${maxGrade}<br>
            Лучшие студенты: ${bestStudents.map(s => s.name).join(", ")}<br>
            Минимальная оценка: ${minGrade}<br>
            Студенты с минимальной оценкой: ${worstStudents.map(s => s.name).join(", ")}<br>
            <hr>
            Успеваемость группы: ${percentage.toFixed(1)}%<br>
            Сдали: ${passed} из ${students.length}
        </div>
    `;
}

// Генератор случайных заданий
function generateTask() {
    let randomIndex = Math.floor(Math.random() * tasks.length);
    let randomTask = tasks[randomIndex];

    document.getElementById("taskGenerator").innerHTML = `
        <div class="result">
            <h3>Ваше учебное задание:</h3>
            ${randomTask}
        </div>
    `;
}

// Проверка сроков сдачи
function checkDeadlines() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let result = "";

    assignments.forEach(function(task) {
        let deadline = new Date(task.date + "T00:00:00");
        let difference = deadline - today;
        let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

        let status = "";

        if (daysLeft < 0) {
            status = `<span class="bad">Просрочено на ${Math.abs(daysLeft)} дн.</span>`;
        } else if (daysLeft === 0) {
            status = `<span class="bad">Сдать сегодня!</span>`;
        } else {
            status = `<span class="good">Осталось ${daysLeft} дн.</span>`;
        }

        result += `
            <div class="student">
                <strong>${task.name}</strong><br>
                Дата сдачи: ${deadline.toLocaleDateString("ru-RU")}<br>
                Статус: ${status}
            </div>
        `;
    });

    document.getElementById("deadlines").innerHTML = result;
}

// Формирование итогового отчёта
function generateReport() {
    let grades = students.map(student => student.grade);
    let sum = grades.reduce((total, grade) => total + grade, 0);
    let average = sum / students.length;

    let maxGrade = Math.max(...grades);
    let minGrade = Math.min(...grades);

    let passed = students.filter(student => student.grade >= 50).length;
    let failed = students.length - passed;
    let percentage = (passed / students.length) * 100;

    let today = new Date();

    let overdue = assignments.filter(task => {
        let deadline = new Date(task.date + "T00:00:00");
        return deadline < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }).length;

    document.getElementById("report").innerHTML = `
        <div class="result">
            <h3>Итоговый отчёт</h3>
            Дата отчёта: ${today.toLocaleDateString("ru-RU")}<br>
            Количество студентов: ${students.length}<br>
            Сумма оценок: ${sum}<br>
            Средний балл: ${average.toFixed(2)}<br>
            Максимальная оценка: ${maxGrade}<br>
            Минимальная оценка: ${minGrade}<br>
            Успеваемость: ${percentage.toFixed(1)}%<br>
            Успешно сдали: ${passed}<br>
            Не сдали: ${failed}<br>
            Всего заданий: ${assignments.length}<br>
            Просроченных заданий: ${overdue}
        </div>
    `;
}

// Текущая дата
console.log("Текущая дата:", new Date().toLocaleDateString("ru-RU"));

// Запуск отображения студентов
showStudents();

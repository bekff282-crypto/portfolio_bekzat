
// =====================================
// 1. Создание первого объекта student
// =====================================

let student = {
    name: "Александр",
    age: 18,
    group: "ИС-31",
    grade: 85,
    isActive: true,

    showInfo() {
        console.log("Имя:", this.name);
        console.log("Возраст:", this.age);
        console.log("Группа:", this.group);
        console.log("Оценка:", this.grade);
    },

    isPassed() {
        return this.grade >= 50;
    }
};

// Вывод первоначального объекта
console.log("Первоначальный объект:", student);
console.log("Имя студента:", student.name);
console.log("Оценка студента:", student["grade"]);

// Изменение объекта
student.age = 19;
student.email = "alexander@gmail.com";

delete student.isActive;

console.log("Обновлённый объект:", student);

// Проверка методов объекта
student.showInfo();
console.log("Сдал:", student.isPassed());

// Изменение оценки
student.grade = 40;

student.showInfo();
console.log("После изменения оценки:", student.isPassed());


// =====================================
// 2. Родительский класс Person
// =====================================

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showBasicInfo() {
        return `${this.name}, ${this.age} лет`;
    }
}


// =====================================
// 3. Класс Student
// =====================================

class Student extends Person {

    constructor(name, age, group, grade) {

        super(name, age);

        this.group = group;
        this.grade = grade;
    }

    // Информация о студенте
    showInfo() {
        return `${this.name} | Группа: ${this.group} | Оценка: ${this.grade}`;
    }

    // Проверка сдачи
    isPassed() {
        return this.grade >= 50;
    }

    // Определение уровня успеваемости
    getPerformanceLevel() {

        if (this.grade >= 90) {
            return "Отлично";
        } else if (this.grade >= 75) {
            return "Хорошо";
        } else if (this.grade >= 50) {
            return "Удовлетворительно";
        } else {
            return "Неудовлетворительно";
        }
    }

    // Изменение оценки
    updateGrade(newGrade) {

        if (
            Number.isFinite(newGrade) &&
            newGrade >= 0 &&
            newGrade <= 100
        ) {
            this.grade = newGrade;
            return true;
        }

        return false;
    }
}


// =====================================
// 4. Создание восьми студентов
// =====================================

let students = [

    new Student("Александр", 18, "ИС-31", 85),
    new Student("Мария", 19, "ИС-31", 92),
    new Student("Данияр", 18, "ИС-31", 45),
    new Student("Алина", 19, "ИС-31", 76),
    new Student("Руслан", 18, "ИС-31", 60),
    new Student("Амирхан", 19, "Wd-2-135", 98),
    new Student("Арнур", 18, "Wd-2-135", 35),
    new Student("Диана", 19, "ИС-31", 81)

];

// Вывод объектов в консоль
console.log("Все студенты:");

students.forEach(student => {
    console.log(student.showInfo());
});

// Поиск студентов с оценкой ниже 50
let failedStudents = students.filter(student => {
    return student.grade < 50;
});

console.log("Студенты с задолженностями:", failedStudents);

// Поиск студента по имени
let foundStudent = students.find(student => {
    return student.name === "Мария";
});

console.log("Найденный студент:", foundStudent);

// Создание списка имён
let studentNames = students.map(student => {
    return student.name;
});

console.log("Список имён:", studentNames);


// =====================================
// 5. Класс Teacher
// =====================================

class Teacher extends Person {

    constructor(name, age, subject, experience) {

        super(name, age);

        this.subject = subject;
        this.experience = experience;
    }

    // Информация о преподавателе
    showInfo() {
        return `${this.name} | Предмет: ${this.subject} | Стаж: ${this.experience} лет`;
    }

    // Назначение оценки студенту
    assignGrade(student, grade) {

        return student.updateGrade(grade);
    }
}


// =====================================
// 6. Создание преподавателей
// =====================================

let teachers = [

    new Teacher("Анна", 30, "JavaScript", 5),
    new Teacher("Дмитрий", 35, "Информатика", 10)

];

console.log("Преподаватели:");

teachers.forEach(teacher => {
    console.log(teacher.showInfo());
});

// Проверка наследования
console.log("Информация о студенте:", students[0].showBasicInfo());
console.log("Информация о преподавателе:", teachers[0].showBasicInfo());

// Проверка назначения оценки
let gradeResult = teachers[0].assignGrade(students[0], 95);

console.log("Результат назначения оценки:", gradeResult);
console.log("Новая оценка Александра:", students[0].grade);


// =====================================
// 7. Класс Journal
// =====================================

class Journal {

    constructor() {
        this.students = [];
    }

    // Добавление студента
    addStudent(student) {
        this.students.push(student);
    }

    // Удаление студента по имени
    removeStudent(name) {

        let index = this.students.findIndex(student => {
            return student.name.toLowerCase() === name.toLowerCase();
        });

        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }

        return false;
    }

    // Поиск студента
    findStudent(name) {

        return this.students.find(student => {
            return student.name.toLowerCase() === name.toLowerCase();
        });
    }

    // Расчёт среднего балла
    getAverageGrade() {

        if (this.students.length === 0) {
            return 0;
        }

        let total = 0;

        this.students.forEach(student => {
            total += student.grade;
        });

        return total / this.students.length;
    }

    // Получение студентов с задолженностями
    getFailedStudents() {

        return this.students.filter(student => {
            return !student.isPassed();
        });
    }

    // Получение всех студентов
    getAllStudents() {
        return this.students;
    }
}


// =====================================
// 8. Создание электронного журнала
// =====================================

let journal = new Journal();

// Добавление студентов в журнал
students.forEach(student => {
    journal.addStudent(student);
});

console.log("Электронный журнал:", journal);
console.log("Средний балл:", journal.getAverageGrade());
console.log("Студенты с задолженностями:", journal.getFailedStudents());


// =====================================
// 9. Функция отображения студентов
// =====================================

function renderStudents() {

    let table = "";

    journal.getAllStudents().forEach((student, index) => {

        let status = student.isPassed()
            ? "<span class='success'>Сдал</span>"
            : "<span class='error'>Не сдал</span>";

        table += `
            <tr>
                <td>${index + 1}</td>
                <td>${escapeHTML(student.name)}</td>
                <td>${student.age}</td>
                <td>${escapeHTML(student.group)}</td>
                <td>${student.grade}</td>
                <td>${student.getPerformanceLevel()}</td>
                <td>
                    ${status}
                    <br>
                    <button class="edit-btn"
                        onclick="editGrade(${index})">
                        Изменить
                    </button>

                    <button class="delete-btn"
                        onclick="deleteStudent(${index})">
                        Удалить
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("studentTable").innerHTML = table;

    updateStudentSelect();
    updateStatistics();
    renderFailedStudents();
}


// Защита текста от вставки HTML-кода
function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}


// =====================================
// 10. Общая статистика
// =====================================

function updateStatistics() {

    let allStudents = journal.getAllStudents();

    let passed = allStudents.filter(student => student.isPassed()).length;

    let failed = journal.getFailedStudents().length;

    document.getElementById("statistics").innerHTML =

        "<p><b>Всего студентов:</b> " + allStudents.length + "</p>" +

        "<p><b>Средний балл группы:</b> " +
        journal.getAverageGrade().toFixed(2) + "</p>" +

        "<p><b>Успешно сдали:</b> " + passed + "</p>" +

        "<p><b>Не сдали:</b> " + failed + "</p>";
}


// =====================================
// 11. Список студентов с задолженностями
// =====================================

function renderFailedStudents() {

    let failed = journal.getFailedStudents();

    let result = "";

    if (failed.length === 0) {

        result = "<p class='success'>Задолженностей нет!</p>";

    } else {

        failed.forEach(student => {

            result +=
                "<p class='error'>" +
                escapeHTML(student.name) +
                " — " + student.grade + " баллов</p>";
        });
    }

    document.getElementById("failedStudents").innerHTML = result;
}


// =====================================
// 12. Добавление нового студента
// =====================================

document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();

    let age = Number(document.getElementById("studentAge").value);

    let group = document.getElementById("studentGroup").value.trim();

    let grade = Number(document.getElementById("studentGrade").value);

    if (
        name === "" ||
        group === "" ||
        !Number.isInteger(age) ||
        age < 1 ||
        !Number.isFinite(grade) ||
        grade < 0 ||
        grade > 100
    ) {
        alert("Проверьте правильность введённых данных!");
        return;
    }

    let newStudent = new Student(name, age, group, grade);

    journal.addStudent(newStudent);

    this.reset();

    renderStudents();

    alert("Студент успешно добавлен!");
});


// =====================================
// 13. Поиск студента
// =====================================

function searchStudent() {

    let name = document.getElementById("searchInput").value.trim();

    let result = journal.findStudent(name);

    let searchResult = document.getElementById("searchResult");

    if (name === "") {

        searchResult.innerHTML =
            "<p class='error'>Введите имя студента!</p>";

        return;
    }

    if (result) {

        searchResult.innerHTML =
            "<p class='success'>Студент найден!</p>" +
            "<p><b>Имя:</b> " + escapeHTML(result.name) + "</p>" +
            "<p><b>Возраст:</b> " + result.age + "</p>" +
            "<p><b>Группа:</b> " + escapeHTML(result.group) + "</p>" +
            "<p><b>Оценка:</b> " + result.grade + "</p>" +
            "<p><b>Успеваемость:</b> " + result.getPerformanceLevel() + "</p>";

    } else {

        searchResult.innerHTML =
            "<p class='error'>Студент не найден!</p>";
    }
}


// =====================================
// 14. Изменение оценки
// =====================================

function editGrade(index) {

    let student = journal.getAllStudents()[index];

    let newGrade = prompt(
        "Введите новую оценку для " + student.name,
        student.grade
    );

    if (newGrade === null) {
        return;
    }

    if (newGrade.trim() === "") {
        alert("Оценка не может быть пустой!");
        return;
    }

    let grade = Number(newGrade);

    if (student.updateGrade(grade)) {

        alert("Оценка успешно изменена!");

        renderStudents();

    } else {

        alert("Ошибка! Оценка должна быть от 0 до 100.");
    }
}


// =====================================
// 15. Удаление студента
// =====================================

function deleteStudent(index) {

    let student = journal.getAllStudents()[index];

    if (confirm("Удалить студента " + student.name + "?")) {

        journal.removeStudent(student.name);

        renderStudents();

        alert("Студент удалён!");
    }
}


// =====================================
// 16. Обновление списка для преподавателя
// =====================================

function updateStudentSelect() {

    let select = document.getElementById("teacherStudent");

    let options = "<option value=''>Выберите студента</option>";

    journal.getAllStudents().forEach((student, index) => {

        options +=
            `<option value="${index}">${escapeHTML(student.name)}</option>`;
    });

    select.innerHTML = options;
}


// =====================================
// 17. Вывод преподавателей
// =====================================

function renderTeachers() {

    let result = "";

    teachers.forEach(teacher => {

        result +=
            "<p><b>" + escapeHTML(teacher.name) + "</b></p>" +
            "<p>Предмет: " + escapeHTML(teacher.subject) + "</p>" +
            "<p>Стаж работы: " + teacher.experience + " лет</p>";
    });

    document.getElementById("teacherList").innerHTML = result;
}


// =====================================
// 18. Назначение оценки преподавателем
// =====================================

document.getElementById("teacherForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let teacherIndex = Number(
        document.getElementById("teacherSelect").value
    );

    let studentIndex = Number(
        document.getElementById("teacherStudent").value
    );

    let grade = Number(
        document.getElementById("teacherGrade").value
    );

    if (
        document.getElementById("teacherSelect").value === "" ||
        document.getElementById("teacherStudent").value === "" ||
        !Number.isFinite(grade) ||
        grade < 0 ||
        grade > 100
    ) {
        alert("Заполните все поля правильно!");
        return;
    }

    let teacher = teachers[teacherIndex];

    let student = journal.getAllStudents()[studentIndex];

    let result = teacher.assignGrade(student, grade);

    if (result) {

        document.getElementById("teacherMessage").innerHTML =
            "<p class='success'>" +
            escapeHTML(teacher.name) +
            " назначил новую оценку студенту " +
            escapeHTML(student.name) +
            ": " + grade +
            "</p>";

        renderStudents();

        this.reset();

    } else {

        document.getElementById("teacherMessage").innerHTML =
            "<p class='error'>Не удалось изменить оценку!</p>";
    }
});


// =====================================
// 19. Запуск сайта
// =====================================

renderStudents();

renderTeachers();

console.log("Электронный журнал успешно запущен!");

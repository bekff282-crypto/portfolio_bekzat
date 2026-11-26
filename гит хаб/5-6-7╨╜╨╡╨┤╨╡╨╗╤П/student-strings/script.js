
// =====================================
// 1. Массив объектов студентов
// =====================================

let students = [
    {
        name: "  александр иванов  ",
        group: "ис-31",
        email: "ALEX@COLLEGE.KZ"
    },
    {
        name: "МАРИЯ ПЕТРОВА",
        group: "ИС-31",
        email: "maria@college.kz"
    },
    {
        name: "  данияр ахметов",
        group: "ис-32",
        email: "DANIYAR@COLLEGE.KZ"
    },
    {
        name: "Алина Сергеева  ",
        group: "ИС-32",
        email: "alina@college.kz"
    }
];


// =====================================
// 2. Функция красивого оформления имени
// =====================================

function formatName(name) {

    return name
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}


// =====================================
// 3. Обработка группы
// =====================================

function formatGroup(group) {

    return group
        .trim()
        .replace(/\s+/g, "")
        .toUpperCase();
}


// =====================================
// 4. Обработка электронной почты
// =====================================

function formatEmail(email) {

    return email
        .trim()
        .toLowerCase();
}


// =====================================
// 5. Проверка правильности Email
// =====================================

function checkEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// =====================================
// 6. Безопасное отображение текста
// =====================================

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
// 7. Обработка всех студентов
// =====================================

function processAllStudents() {

    students.forEach(student => {

        student.name = formatName(student.name);
        student.group = formatGroup(student.group);
        student.email = formatEmail(student.email);

    });

    console.log("Обработанные студенты:", students);

    renderStudents();
}


// =====================================
// 8. Формирование карточек студентов
// =====================================

function renderStudents() {

    let result = "";

    students.forEach((student, index) => {

        let nameParts = student.name.split(" ");

        result += `
            <div class="student-card">

                <h3>${escapeHTML(student.name)}</h3>

                <p><b>Номер:</b> ${index + 1}</p>

                <p><b>Группа:</b> ${escapeHTML(student.group)}</p>

                <p><b>Email:</b> ${escapeHTML(student.email)}</p>

                <p><b>Количество слов в ФИО:</b> ${nameParts.length}</p>

                <p><b>Имя:</b> ${escapeHTML(nameParts[0])}</p>

                <p><b>Начинается с буквы А:</b>
                    ${student.name.startsWith("А") ? "Да" : "Нет"}
                </p>

                <p><b>Email заканчивается на .kz:</b>
                    ${student.email.endsWith(".kz") ? "Да" : "Нет"}
                </p>

            </div>
        `;
    });

    document.getElementById("studentList").innerHTML = result;
}


// =====================================
// 9. Обработка введённых данных
// =====================================

document.getElementById("processButton").addEventListener("click", function() {

    let fullName = document.getElementById("fullName").value;

    let group = document.getElementById("groupInput").value;

    let email = document.getElementById("emailInput").value;

    let result = document.getElementById("result");

    // Удаляем лишние пробелы
    fullName = fullName.trim();
    group = group.trim();
    email = email.trim();

    if (fullName === "" || group === "" || email === "") {

        result.innerHTML =
            "<p class='error'>Заполните все поля!</p>";

        return;
    }

    // Исправляем текст
    let formattedName = formatName(fullName);

    let formattedGroup = formatGroup(group);

    let formattedEmail = formatEmail(email);

    // Проверяем Email
    if (!checkEmail(formattedEmail)) {

        result.innerHTML =
            "<p class='error'>Неправильный формат электронной почты!</p>";

        return;
    }

    // Разделяем ФИО на части
    let nameParts = formattedName.split(" ");

    // Добавляем нового студента
    let newStudent = {
        name: formattedName,
        group: formattedGroup,
        email: formattedEmail
    };

    students.push(newStudent);

    // Вывод результата
    result.innerHTML = `

        <h3 class="success">Данные успешно обработаны!</h3>

        <p><b>ФИО:</b> ${escapeHTML(formattedName)}</p>

        <p><b>Группа:</b> ${escapeHTML(formattedGroup)}</p>

        <p><b>Email:</b> ${escapeHTML(formattedEmail)}</p>

        <p><b>Количество слов:</b> ${nameParts.length}</p>

        <p><b>Имя:</b> ${escapeHTML(nameParts[0])}</p>

        <p><b>Фамилия:</b> ${escapeHTML(nameParts.slice(1).join(" "))}</p>

        <p><b>Начинается с буквы А:</b>
            ${formattedName.startsWith("А") ? "Да" : "Нет"}
        </p>

        <p><b>Email заканчивается на .kz:</b>
            ${formattedEmail.endsWith(".kz") ? "Да" : "Нет"}
        </p>

        <p><b>Проверка Email:</b>
            <span class="success">Корректный</span>
        </p>

    `;

    // Обновляем список
    renderStudents();

    // Очищаем поля
    document.getElementById("fullName").value = "";
    document.getElementById("groupInput").value = "";
    document.getElementById("emailInput").value = "";

    console.log("Имя:", formattedName);
    console.log("Группа:", formattedGroup);
    console.log("Email:", formattedEmail);
    console.log("Части имени:", nameParts);

});


// =====================================
// 10. Поиск студента
// =====================================

function searchStudent() {

    let searchValue = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    let searchResult = document.getElementById("searchResult");

    if (searchValue === "") {

        searchResult.innerHTML =
            "<p class='error'>Введите имя для поиска!</p>";

        return;
    }

    // Поиск без учёта регистра
    let foundStudents = students.filter(student => {

        return student.name.toLowerCase().includes(searchValue);

    });

    if (foundStudents.length > 0) {

        let result = "<h3 class='success'>Найденные студенты:</h3>";

        foundStudents.forEach(student => {

            result += `
                <div class="student-card">
                    <p><b>Имя:</b> ${escapeHTML(student.name)}</p>
                    <p><b>Группа:</b> ${escapeHTML(student.group)}</p>
                    <p><b>Email:</b> ${escapeHTML(student.email)}</p>
                </div>
            `;
        });

        searchResult.innerHTML = result;

    } else {

        searchResult.innerHTML =
            "<p class='error'>Студент не найден!</p>";
    }
}


// =====================================
// 11. Дополнительная проверка строк
// =====================================

function testStrings() {

    let example = "JavaScript Работа Со Строками";

    console.log("Исходная строка:", example);

    // Длина строки
    console.log("Длина строки:", example.length);

    // Верхний регистр
    console.log("Верхний регистр:", example.toUpperCase());

    // Нижний регистр
    console.log("Нижний регистр:", example.toLowerCase());

    // Получение части строки
    console.log("Первые 10 символов:", example.slice(0, 10));

    // Замена слова
    console.log(
        "Замена слова:",
        example.replace("Работа", "Практика")
    );

    // Разделение строки
    console.log("Массив слов:", example.split(" "));

    // Проверка начала строки
    console.log("Начинается с JavaScript:", example.startsWith("JavaScript"));

    // Проверка окончания строки
    console.log("Заканчивается на Строками:", example.endsWith("Строками"));

}


// =====================================
// 12. Запуск программы
// =====================================

// Обрабатываем первоначальных студентов
processAllStudents();

// Проверяем методы строк
testStrings();

console.log("Программа успешно запущена!");

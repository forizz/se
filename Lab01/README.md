# Лабораторна робота №1: Принципи програмування

Цей репозиторій містить рішення для лабораторної роботи №1 курсу «Конструювання програмного забезпечення».

## Варіант завдання

Обрано: **Варіант 3 – «Дія» (система електронних документів)**

## Впроваджені принципи програмування

Нижче перелічено основні принципи та посилання на відповідні файли коду.

### 1. DRY (Don’t Repeat Yourself)

Удосконалили загальну логіку в базовому класі `Document` і використовуємо утиліту `flatObject()` в усіх похідних.

- **Файл:** [src/document.js](./src/document.js)
- **Повторне використання:**
    - [src/passport.js](./src/passport.js)
    - [src/military-id.js](./src/military-id.js)

### 2. KISS (Keep It Simple, Stupid)

Кожен клас відповідає за одне:

- `Document` – базові поля документа
- `Passport`, `DrivingLicense`, `MilitaryID` – власні властивості та методи
- `DocumentContainer` – операції з колекцією документів та їх відображення

- **Файл:** [src/document-container.js](./src/document-container.js)

### 3. SOLID

1. **S – Single Responsibility**: кожен клас має одну відповідальність
    - [src/document.js](./src/document.js)
2. **O – Open/Closed**: нові типи документів додаються через наслідування, не змінюючи `Document`
    - [src/driving-licence.js](./src/driving-licence.js)
3. **L – Liskov Substitution**: похідні класи (`Passport`, `MilitaryID`) без проблем замінюють `Document`
    - [src/passport.js](./src/passport.js)
4. **I – Interface Segregation**: мінімальний інтерфейс (`toString()`, `fullName()`) в `Document`
    - [src/document.js](./src/document.js)
5. **D – Dependency Inversion**: `DocumentContainer` працює з абстракцією `Document`, а не з конкретними класами
    - [src/document-container.js](./src/document-container.js)

### 4. YAGNI (You Aren’t Gonna Need It)

Використали легковагу `flatObject()` замість складних бібліотек для серіалізації.

- **Файл:** [src/document.js](./src/document.js)

### 5. Composition Over Inheritance

- `DrivingLicense` містить масив об’єктів `Vehicle`
    - [src/driving-licence.js](./src/driving-licence.js)
- `DocumentContainer` складається з масиву документів
    - [src/document-container.js](./src/document-container.js)

### 6. Program to Interfaces, Not Implementations

`DocumentContainer` взаємодіє через інтерфейс `Document` (методи `toString()`, `fullName()`), а не з конкретними
підкласами.

- **Файл:** [index.js](./index.js)

### 7. Fail Fast

Помилки в конструкторі документів (наприклад, некоректні параметри) кидаються одразу.

- **Файл:** [src/document.js](./src/document.js)  

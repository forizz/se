/**
 * @class Authenticator
 * @description Клас-одинак з підтримкою підкласів: окремий інстанс на кожен клас, що наслідує.
 */
class Authenticator {
    /** @type {Map<Function, Authenticator>} */
    static instances = new Map();

    constructor() {
        // `new.target` — це безпосередньо конструктор, який викликано через `new`
        const cls = new.target;
        // Якщо для цього класу інстанс уже є, повертаємо його
        if (Authenticator.instances.has(cls)) {
            return Authenticator.instances.get(cls);
        }
        // Інакше — зберігаємо та ініціалізуємо новий інстанс
        /** @type {string|null} */
        this.currentUser = null;
        Authenticator.instances.set(cls, this);
        // Нічого не повертаємо явно — повернеться `this`
    }

    /**
     * Повернути єдиний інстанс для цього класу.
     * @returns {Authenticator}
     */
    static getInstance() {
        // Використовуємо new.target = клас, з якого викликано getInstance()
        return new this();
    }

    /**
     * Логінить користувача.
     * @param {string} username
     */
    login(username) {
        this.currentUser = username;
        console.log(`Користувач "${username}" успішно аутентифікований.`);
    }

    /**
     * Логаутає користувача.
     */
    logout() {
        console.log(`Користувач "${this.currentUser}" вийшов.`);
        this.currentUser = null;
    }
}

/**
 * @class ProxyAuthenticator
 * @extends Authenticator
 * @description Підклас Authenticator з власним методом sayHello().
 */
class ProxyAuthenticator extends Authenticator {
    sayHello() {
        console.log('Hello from ProxyAuthenticator!');
    }
}

// Головна демонстрація
function main() {
    const a1 = Authenticator.getInstance();
    const a2 = new Authenticator();
    const p1 = ProxyAuthenticator.getInstance();
    const p2 = new ProxyAuthenticator();

    console.log('a1 === a2:', a1 === a2);       // true
    console.log('p1 === p2:', p1 === p2);       // true
    console.log('a1 === p1:', a1 === p1);       // false — різні класи мають свої інстанси

    a1.login('ivan');
    p1.sayHello();                              // Тепер працює!
    p1.logout();
}

main();


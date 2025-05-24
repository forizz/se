/**
 * @class Authenticator
 */
class Authenticator {
    /** @type {Map<Function, Authenticator>} */
    static instances = new Map();

    constructor() {
        const cls = new.target;
        if (Authenticator.instances.has(cls)) {
            return Authenticator.instances.get(cls);
        }
        /** @type {string|null} */
        this.currentUser = null;
        Authenticator.instances.set(cls, this);
    }

    /**
     * @returns {Authenticator}
     */
    static getInstance() {
        return new this();
    }

    /**
     * @param {string} username
     */
    login(username) {
        this.currentUser = username;
        console.log(`Користувач "${username}" успішно аутентифікований.`);
    }

    logout() {
        console.log(`Користувач "${this.currentUser}" вийшов.`);
        this.currentUser = null;
    }
}

/**
 * @class ProxyAuthenticator
 * @extends Authenticator
 */
class ProxyAuthenticator extends Authenticator {
    sayHello() {
        console.log('Hello from ProxyAuthenticator!');
    }
}

function main() {
    const a1 = Authenticator.getInstance();
    const a2 = new Authenticator();
    const p1 = ProxyAuthenticator.getInstance();
    const p2 = new ProxyAuthenticator();

    console.log('a1 === a2:', a1 === a2);
    console.log('p1 === p2:', p1 === p2);
    console.log('a1 === p1:', a1 === p1);

    a1.login('ivan');
    p1.sayHello();
    p1.logout();
}

main();


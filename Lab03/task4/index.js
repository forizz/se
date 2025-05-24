import {SmartTextReader} from "./SmartTextReader.js";
import {SmartTextChecker} from "./SmartTextChecker.js";
import {SmartTextReaderLocker} from "./SmartTextReaderLocker.js";

function main() {
    const pathAllowed = 'example.txt';
    const pathBlocked = 'secret_config.txt';


    console.log('--- Без проксі ---');
    try {
        const reader = new SmartTextReader(pathAllowed);
        reader.open();
        const matrix = reader.read();
        console.log('Matrix:', matrix);
        reader.close();
    } catch (e) {
        console.error(e.message);
    }

    console.log('\n--- Логуючий проксі ---');
    try {
        const checker = new SmartTextChecker(new SmartTextReader(pathAllowed));
        checker.open();
        const matrix2 = checker.read();
        console.log('Matrix via checker:', matrix2);
        checker.close();
    } catch (e) {
        console.error(e.message);
    }

    console.log('\n--- Проксі-локер ---');
    const locker = new SmartTextReaderLocker(new SmartTextReader(pathBlocked), /\.txt$/);
    locker.open();
    const matrix3 = locker.read();
    console.log('Attempted read matrix:', matrix3);
    locker.close();
}

main();

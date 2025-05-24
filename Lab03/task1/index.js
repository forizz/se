import {Logger} from './logger/Logger.js';
import {FileWriter} from './logger/FileWriter.js';
import {FileLoggerAdapter} from './logger/FileLoggerAdapter.js';

function main() {
    const consoleLogger = new Logger();
    consoleLogger.log('Це просте повідомлення');
    consoleLogger.warn('Це попередження');
    consoleLogger.error('Це помилка');

    const writer = new FileWriter('app.log');
    const fileLogger = new FileLoggerAdapter(writer);

    fileLogger.log('Повідомлення в файл');
    fileLogger.warn('Попередження в файл');
    fileLogger.error('Помилка в файл');

    console.log('\nПовідомлення успішно записані в файл app.log');
}

main();

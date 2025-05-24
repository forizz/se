import {WebSite} from './webSite.js';
import {MobileApp} from './mobileApp.js';
import {ManagerCall} from './managerCall.js';

function main() {
    const creators = [
        new WebSite(),
        new MobileApp(),
        new ManagerCall()
    ];

    creators.forEach(creator => {
        creator.subscribe();
        console.log('-----------------------------');
    });
}

main();

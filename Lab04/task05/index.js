import {TextEditor} from './TextEditor.js';

const editor = new TextEditor();

editor.write('Hello');
editor.show();

editor.write(', world!');
editor.show();

editor.undo();
editor.show();

editor.redo();
editor.show();

editor.overwrite('New content!');
editor.show();

editor.undo();
editor.show();

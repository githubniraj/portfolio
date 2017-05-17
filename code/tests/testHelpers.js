import { jsdom } from 'jsdom';
import fs from 'fs';

// Store this DOM and the window in global scope for React
const indexHtml = fs.readFileSync('src/main/public/index.html', 'utf8');
global.document = jsdom(indexHtml, { url: `http://localhost/` });
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

// React-MDL stubs
window.componentHandler = window.componentHandler || {};
window.componentHandler.upgradeElement = Function.prototype;
window.componentHandler.upgradeElements = Function.prototype;
window.componentHandler.register = Function.prototype;
global.componentHandler = window.componentHandler;
delete window.CustomEvent;

// material-ui stub
window.getSelection = () => ({ removeAllRanges: Function.prototype });

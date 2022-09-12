const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const html = fs.readFileSync(path.resolve(__dirname, './popup-mock.html'), 'utf8');
jest.dontMock('fs');
export const dom = new JSDOM(html.toString(), {runScripts: 'dangerously'});
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console);
export const document = dom.window.document;
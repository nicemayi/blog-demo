const fs = require('fs');
const path = require('path');
const readline = require('readline');

const fullFileName = path.join(__dirname, '../', '../', 'logs', 'access.log');

const readStream = fs.createReadStream(fullFileName);

const rl = readline.createInterface({
    input: readStream,
});

let chromeNum = 0;
let sum = 0;

rl.on('line', (lineData) => {
    if (!lineData) {
        return;
    }
    sum++;
    const arr = lineData.split(' -- ');
    if (arr.length > 0 && arr[2].indexOf('Chrome') > 0) {
        chromeNum++;
    } 
});

rl.on('close', () => {
    console.log('chromeNum', chromeNum);
    console.log('sum', sum);
});
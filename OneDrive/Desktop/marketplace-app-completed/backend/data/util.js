const fs = require('fs/promises');

async function readData() {
  const data = await fs.readFile('database.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('database.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
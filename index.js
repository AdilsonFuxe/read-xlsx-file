const xlsx = require('node-xlsx');
//nome do ficheiro excel na pasta do projecto
const plan = xlsx.parse('Modelos de carros.xlsx');
const fs = require('fs');

const er = /\W/gi;
const obj = [];
let i = 0;
plan[0].data.forEach((item) => {
  let [Modelo, Classificacao] = item;

  if (item.length > 0 && i > 0) {
    obj.push({ [Modelo]: Classificacao });
  }
  i++;
});

const save = JSON.stringify(obj);
fs.writeFileSync('modelos.json', save);

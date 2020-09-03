const xlsx = require('node-xlsx')

const plan = xlsx.parse('Book1.xlsx');

let i = 1;
plan[0].data.map(item => {
    let dataAtual = 'const data = [\n{\n';
    let [provincia, codigo, capital, area, populacao, municipios, comunas] = item;
    
    dataAtual += `  'id' : ${i++},\n`,
    dataAtual += `  'nome' : '${provincia}',\n`,  
    dataAtual += `  'codigo': '${codigo}',\n`,
    dataAtual += `  'capital': '${capital}',\n`,        
    dataAtual += `  'area': '${area}',\n`,
    dataAtual += `  'populacao': '${populacao}',\n`,
    dataAtual += `  'municipios': ${municipios},\n` ,
    dataAtual += `  'comunas': ${comunas}\n`,
    dataAtual += '},\n]\n'
    console.log(dataAtual);
});
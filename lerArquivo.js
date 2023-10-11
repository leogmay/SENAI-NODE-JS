var fs = require('fs');
const moment = require("moment");
const time = new Date();
const parsedTime = moment (time).format("h:mm:ss");
console.log(parsedTime);

const sh = require("superheroes");
const chalk = require("chalk");
console.log(chalk.green(sh.random()));

fs.appendFile('ArquivoRenomeado.txt', 'Olá NodeJS! SENAI', function(err) {
    if (err) throw err;

    console.log('Arquivo Salvo! UNISENAI 2023');
})


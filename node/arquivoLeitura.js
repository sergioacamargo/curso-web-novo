const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincromo...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)       
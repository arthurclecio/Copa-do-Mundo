const readline = require('readline-sync');

function copaDoMundo(ano) {
 
  if (ano >= 1930 && ano <= 2023 && (ano - 1930) % 4 === 0 && (ano < 1939 || ano > 1949)) {
    return `${ano} teve Copa do Mundo!`;
  } else {
    return `${ano} não teve Copa do Mundo.`;
  }
}

function runPrompt() {
  while (true) {
    const inputAno = readline.question('Digite um ano para verificar se teve Copa do Mundo (ou digite "sair" para encerrar): ');

    if (inputAno.toLowerCase() === 'sair') {
      console.log('Encerrando o programa.');
      break;
    }

    const ano = parseInt(inputAno, 10);

    if (!isNaN(ano)) {
      const resultado = copaDoMundo(ano);
      console.log(resultado);
    } else {
      console.log('Por favor, insira um ano válido (número inteiro).');
    }
  }
}

runPrompt();

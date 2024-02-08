// cria uma array com todas as perguntas
const perguntas = [
  // cada {} representa um objeto com "variáveis" dentro
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      // cria outra array dentro do objeto pra guardar as diferentes opções de resposta
    respostas: ["let", "var", "const"],
    correta: 2,
  },
  {
    pergunta:
      "Qual dessas opções é uma maneira correta de comentar um código em JavaScript?",
    respostas: [
      "// Este é um comentário de linha única",
      "/* Este é um comentário de bloco */",
      "' Este é um comentário de linha única",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: ["=", "==", "==="],
    correta: 0,
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: ["32", "5", "NaN"],
    correta: 0,
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "funcao minhaFuncao() {}",
      "function = minhaFuncao() {}",
      "def minhaFuncao() {}",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método usado para imprimir algo no console em JavaScript?",
    respostas: ["console.print()", "console.log()", "print()"],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
    respostas: ["while", "if-else", "for"],
    correta: 1,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string em um número em JavaScript?",
    respostas: ["parseString()", "parseInt()", "convertToNumber()"],
    correta: 1,
  },
  {
    pergunta:
      "Qual símbolo é usado para comentários de linha única em JavaScript?",
    respostas: ["//", "/*", "*/"],
    correta: 0,
  },
  {
    pergunta: "Qual é o operador lógico 'E' em JavaScript?",
    respostas: ["&&", "||", "!"],
    correta: 0,
  },
]
// resgata a div em que o quiz será aplicado
const quiz = document.querySelector("#quiz")

// resgata o template do quiz
const template = document.querySelector("template")

// vai gerar um loop pra cada pergunta
for (const item of perguntas) {
  // copia todo conteúdo dentro do template
  const quizItem = template.content.cloneNode(true)
  // altera o título das perguntas de acordo com o array acima
  quizItem.querySelector("h3").textContent = item.pergunta
    
  // gera um loop pra cada resposta (basicamente, coloca elas no código)
  for (let resposta of item.respostas) {
    // copia cada dt e altera a sua resposta de acordo com o item.respostas declarado no loop
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta

    // adiciona um novo filho pro dl de acordo com a quantidade de respostas(3)
    quizItem.querySelector("dl").appendChild(dt)
  }

  // remove o dt original
  quizItem.querySelector("dl dt").remove()

  // adiciona o questionário gerado acima no div#quiz
  quiz.appendChild(quizItem)
}

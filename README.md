# Bug Finding Challenge

Série de programas em Typescript, com intuito de descobrir o que está errado e corrigir o problema. Cada arquivo é um desafio individual, então a ideia é executar e resolver um por um, até finalizar todos. 

Os arquivos podem ser transpilados para Javascript e executados diretamente (ex. node file.js), ou através de um transpilador direto, como tsx (ex. npx tsx file.ts). Eu recomendo usar tsx direto, mas use o que ficar melhor.

Quando um desafio não estiver corretamente solicionado, ao executar retornará uma mensagem de erro de assert, por exemplo:

```
node:internal/modules/run_main:122
    triggerUncaughtException(
    ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

-1 !== 5

    at <anonymous> (/home/rafael/Projetos/bug-finding-challenge-ts/sum.ts:7:8)
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: -1,
  expected: 5,
  operator: 'strictEqual'
}
```

Quando resolver corretamente, receberá um simples ```Passou!```.

#

## Ordem Sugerida

1. **sum.ts**: bem simples e óbvio, apenas para mostrar como funciona o desafio
2. **wordCount.ts**: manipulação de caracteres
3. **stringReversal.ts**: lida com manipulação de strings
4. **average.ts**: trativa de erros com inteiros
5. **palindrome.ts**: mais manipulação de strings
6. **primeNumbers.ts**: validação de inteiros
7. **anagram.ts**: mais manipulação de strings
8. **countVowel.ts**: string e regex
9. **recursiveFibonnaci.ts**: recursividade
10. **removeDuplicates.ts**: arrays e sets
11. **bubbleSort.ts**: ordenamento de inteiros
12. **stack.ts**: estrutura de dados
13. **queue.ts**: mais estrutura de dados
14. **jsonParse.ts**: trabalhando com json
15. **bankAccount.ts**: classes
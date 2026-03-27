# 📘 Resumo Completo de Sintaxe em JavaScript

## 🟢 1. Variáveis
var nome = "Cesar";     // evitar (escopo global)
let idade = 30;         // escopo de bloco
const PI = 3.14;        // constante

## 🟢 2. Tipos de Dados
let texto = "Olá";        
let numero = 10;          
let ativo = true;         
let lista = [1, 2, 3];    
let objeto = { nome: "Ana", idade: 25 };
let nulo = null;          
let indefinido;

## 🟢 3. Operadores
// Aritméticos
+ - * / % **

// Comparação
== === != !== > < >= <=

// Lógicos
&& || !

## 🟢 4. Condicionais
if (idade >= 18) {
    console.log("Maior");
} else {
    console.log("Menor");
}

// Operador Ternário
let status = idade >= 18 ? "Adulto" : "Menor";

## 🟢 5. Repetição
for (let i = 0; i < 5; i++) console.log(i);

let i = 0;
while (i < 5) {
    i++;
}

do {
    i++;
} while (i < 5);

## 🟢 6. Funções
function soma(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
};

const mult = (a, b) => a * b;

## 🟢 7. Arrays
let frutas = ["maçã", "banana"];

frutas.push("uva");
frutas.pop();

for (let f of frutas) console.log(f);

## 🟢 8. Objetos
let pessoa = {
    nome: "Ana",
    idade: 25,
    falar() {
        console.log("Olá");
    }
};

console.log(pessoa.nome);

## 🟢 9. Strings
let txt = "JavaScript";

txt.length;
txt.toUpperCase();
txt.includes("Script");

## 🟢 10. Eventos
document.getElementById("btn")
    .addEventListener("click", () => alert("Clicou!"));

## 🟢 11. JSON
let obj = JSON.parse('{"nome":"Ana"}');
let str = JSON.stringify(obj);

## 🟢 12. Assíncrono
async function executar() {
    try {
        let res = await Promise.resolve("OK");
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

## 🟢 13. Classes
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

let p = new Pessoa("Cesar");

## 🟢 14. Módulos
export const soma = (a, b) => a + b;
import { soma } from './arquivo.js';

## 🟢 15. Boas Práticas
- Use const e let
- Prefira ===
- Evite var
- Código limpo e reutilizável

import "./App.css";

const cliente1 = { nome: "Yago", idade: 30, sexo: undefined, id: 1 };
const cliente2 = { nome: "Bartho", idade: 17, sexo: "M", id: 2 };
const cliente3 = { nome: "Chico", idade: 18, sexo: undefined, id: 3 };
const cliente4 = { nome: "Ricardo", idade: 17, sexo: "M", id: 4 };

const clientes = [cliente1, cliente2, cliente3, cliente4];

var result = clientes.map((cliente) => ({
  nome: cliente.nome,
  idade: cliente.idade,
  sexo: cliente.sexo,
  id: cliente.id,
}));

//3 - Cria um outro array que contenha apenas a lista de nomes
var nomes = result.map((nome) => {
  return nome.nome;
});

//1 - Retorna para uma constante todos os objetos que contem nomes que contenham a letra A
const hasLetter = nomes.filter((hasA) => {
  return hasA.includes("a");
});

var sexos = result.map((sexo) => {
  return sexo.sexo;
});

//2 - Altera a idade de todos os que tiverem sexo indefinido para 24 anos
for (let i = 0; i < sexos.length; i++) {
  if (sexos[i] === undefined) {
    result[i].idade = 24;
  }
}

//5 - (Linha 39 - 56) Cria uma funcao que retorna a lista de nomes com uma tag hmtl com o nome <b>nome</b> de quem tiver sexo indefinido
let undefinedSex = [];

const sexosIndefinidos = (element, index, array) => {
  if (sexos[index] === undefined) {
    return undefinedSex.push(result[index].nome);
  }
};

sexos.forEach(sexosIndefinidos);

const b = document.createElement("b");
b.innerText = [undefinedSex];
b.className = "b";

let oldBElement = document.querySelector("b.b");
if (oldBElement) oldBElement.parentNode.removeChild(oldBElement);

document.body.append(b);

var idades = result.map((idade) => {
  return idade.idade;
});

var nomesESexos = result.map((nomeESexo) => {
  return `${nomeESexo.nome} : ${nomeESexo.sexo}`;
});

//4 - (Linha 68 - 74) Cria um outro array que contenha os mesmos objetos do array clientes + um cliente que tu inventar
const cliente5 = { nome: "Thiago", idade: 93, sexo: "M", id: 5 };

let clientes2 = clientes;

clientes2 = [...clientes2, cliente5];

console.log(clientes2);

//6 - (Linha 77 - 87) Cria uma funcao1 que recebe como parametro outra funcao 2 e chama a funcao 2 dentro da funcao 1 executando a alteracao de todas as idades para 12 anos
const mapAges = (element, index, array) => {
  if (idades[index] !== 12) {
    return (idades[index] = 12);
  }
};

const changeAllAgesTo12 = (func) => {
  idades.forEach((e, i, a) => func(e, i, a));
};

changeAllAgesTo12(mapAges);

function App() {
  return (
    <div>
      <div>{nomes.join("; ")}</div>
      <div>{hasLetter.join("; ")}</div>
      <div>{idades.join("; ")}</div>
      <div>{nomesESexos.join("; ")}</div>
    </div>
  );
}

export default App;

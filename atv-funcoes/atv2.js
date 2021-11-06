function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Guilherme",
    idade: 19,
};

const pessoa2 = {
    nome: "Caio",
    idade: 21,
};

const animal = {
    nome: "Billy",
    idade: 5,
    raca: "Pug",
};

console.log(calculaIdade.apply(pessoa1, [22]))
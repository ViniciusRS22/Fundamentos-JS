const alunos = [
    {
        nome: 'João',
        nota: 10,
        turma: '1b'
    },
    {
        nome: 'Sofia',
        nota: 4,
        turma: '1b'
    },
    {
        nome: 'Paulo',
        nota: 8,
        turma: '2c'
    },
    {
        nome: 'Miguel',
        nota: 9,
        turma: '1b'
    }
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        
        const {nota, nome} = arr[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
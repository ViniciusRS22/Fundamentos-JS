/* sSOLUTION XD

function comparaPalavras(word1, word2) {
    if(!word1 || !word2){
        return 'Defina duas palavras!';
    }
    const frase = criaFrase(word1, word2);

    return `${frase}`;

}

function criaFrase(word1, word2) {
    let saoPal = '';

    if (word1 === 'amor', 'roma' && word2 === 'roma', 'amor') {
        saoPal = 'são';
        return `As palavras: ${word1} e ${word2} ${saoPal} palíndromos.`;

    }else {
        return `As palavras: ${word1} e ${word2} não são palíndromos.`;
    }
    
}

console.log(comparaPalavras('amor', 'roma')); */

//solution 1

function verificaPalindromo(palavra) {
    if (!palavra) return "String inexistente";
    
    return palavra.split("").reverse().join("") === palavra;
}

console.log(verificaPalindromo("ovo"));

//solution 2
//omo
//012
//abbbba
//012345
function verificaPalindromo2(palavra) {
    if (!palavra) return "String inexistente";

    for(let i = 0; i < palavra.length / 2; i++) {
        if(palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        } 
    }

    return true;
}

console.log("\n");
console.log(verificaPalindromo2("gato"));


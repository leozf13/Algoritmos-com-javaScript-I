// InsertionSort

const livros = require('./arrayLivros'); // chama o array de objetos Livros no arquivo arrayLivros
const trocaNumeros = require('./trocaNumeros');

function InsertionSort(lista) {
    for(let atual = 0; atual < lista.length; atual++){ // for para percorrer todo o array de itens
        let analise = atual;

        while(analise > 0 && lista[analise].preco < lista[analise -1].preco){ // condição do while
            trocaNumeros(lista, analise); // chama a função trocaNumeros para realizar a troca de elementos do array
            analise --;  // atualiza indice \\ Descrescenta //
        }
    }

    console.table(lista)
}


InsertionSort(livros);
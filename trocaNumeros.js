// Função que faz a troca de números para um método de ordenação

function trocaNumeros(lista, analise) {
    let itemAnalise = lista[analise]; //crio uma variável que vai armazenar o item atual da condição que é menor que o item anterior
    let itemAnterior = lista[analise -1]; //crio uma varíavel para armazenar o item anterior do array que é maior que o próximo item

    lista[analise] = itemAnterior; // lista na posição atual da condição recebe o item anterior que é maior
    lista[analise - 1] = itemAnalise; // lista na posição anterior recebe o item que é menor
    
} // como já estou passando a lista de array diretamente, não preciso retornar um valor

module.exports = trocaNumeros;
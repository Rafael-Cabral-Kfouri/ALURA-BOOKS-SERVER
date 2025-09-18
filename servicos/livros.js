//Serviços é responsável por fazer a conexão com os bancos de dados

const fs = require('fs')

function getTodosLivros () {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId (id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}
function deletarLivro(idParaDeletar){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter(livro => livro.id!==idParaDeletar)

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados)) 
    
}
function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    //temos que descobir o índice, pois um id não é o índice uma vez que algum id pode ser apagado 
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id) 
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}
    // livrosAtuais[indicemodificado] -> {id: "2", nome: "Livro muito legal"}
    // modificacoes -> { "nome": "Livro mucho legal"}
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais) )
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivro
}
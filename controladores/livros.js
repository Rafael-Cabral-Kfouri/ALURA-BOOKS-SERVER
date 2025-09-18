const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivro } = require('../servicos/livros')


function getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
 }
//essa função pega um livro específico
function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id) { // Remove a verificação Number()
            const livro = getLivroPorId(id)
            
            // Verifica se o livro foi encontrado
            if (livro) {
                res.send(livro)
            } else {
                res.status(404).send("Livro não encontrado")
            }
        } else {
            res.status(422).send("Id inválido")
        }

    } catch(error){
        res.status(500).send(error.message)
    }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        //verifica se o nome existe para não adicionar livro sem nome
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso')
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório.")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id

        if(id && Number(id)){
            const body = req.body
            modificaLivro(body, id)
            res.send('Item modificado com sucesso')
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const idParaDeletar = req.params.id
        if (idParaDeletar && Number(idParaDeletar)){
            deletarLivro(idParaDeletar)
            res.send('Livro deletado com sucesso')
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

 module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
 }
const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")


// configurar pasta publica
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/html", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação
// página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})


server.get("/create-point", (req, res) => {
    // req.query: query strings da nossa url
    console.log(req.query)
    
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // req.body: o corpo do nosso formulário
    console.log(req.body)

    // inserir dados no banco de dados
        // inserir dados na tabela
    const query = `
        INSERT INTO places (
            name,
            state,
            city,
            address,
            address2,
            address3,
            complement,
            tel,
            website,
            image,
            items
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?);
    `

    const values = [
        req.body.name,
        req.body.state,
        req.body.city,
        req.body.address,
        req.body.address2,
        req.body.address3,
        req.body.complement,
        req.body.tel,
        req.body.website,
        req.body.image,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro !")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }
    db.run(query, values, afterInsertData)

})


server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // pesquisa vasia
        return res.render("search-results.html", { total: 0 })
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("search-results.html", { places: rows, total: total })
    })
})

// ligar o servidor
server.listen(process.env.PORT || 3000)
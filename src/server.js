const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")


// configurar pasta publica
server.use(express.static("public"))

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
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("search-results.html", { places: rows, total })
    })
})

// ligar o servidor
server.listen(process.env.PORT || 3000)
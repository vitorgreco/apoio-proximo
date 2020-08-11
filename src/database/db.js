// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de daos, para nossas operações
db.serialize(() => {
    // // comandos SQL:
    // // criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         state TEXT,
    //         city TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         address3 TEXT,
    //         complement TEXT,
    //         image TEXT,
    //         items TEXT
    //     );
    // `)



//  // inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         state,
    //         city,
    //         address,
    //         address2,
    //         address3,
    //         complement,
    //         image,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "Sociedade Amigos Parque dos Pássaros",
    //     "São Paulo",
    //     "São Bernardo",
    //     "Parque dos Pássaros",
    //     "Av. das Araras",
    //     "800",
    //     "2",
    //     "https://lh3.googleusercontent.com/proxy/XlP1Uh0S-maS2J1Km3OECQvBuQgkBG4dgh3Aw9IK-HwsGnMeBrFa04rCyga8BTH9-0ZavukZ3JZz_xNJGhxqtRYWNg",
    //     "Alimento"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }
    // db.run(query, values, afterInsertData)



 //   // consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })



//    // deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })

})
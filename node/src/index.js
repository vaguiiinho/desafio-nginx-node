const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'root',
  database:'nodedb'
});

connection.connect();

const getRows = []

const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)

connection.query('SELECT * FROM people;', function(err, rows, fields) {
  if (err) throw err;
  getRows.push(rows)
});

connection.end();

app.get('/', (req, res) => {
    res.render('index', { title: 'Desafio Node nginx', message: 'Full Cycle Rocks!', getRows: getRows[0] })
  })

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
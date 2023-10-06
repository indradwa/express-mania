const express = require('express')

const fs = require('fs')

const app = express()

const PORT = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    console.log(__dirname)
    res.sendFile('./about.html', { root: __dirname})
})

app.get('/users', (req, res) => {
    fs.readFile('./db/fake_database.json', 'utf-8', (error, data) => {
        if(error) res.send("terjadi kesalahan pembacaan file")
        res.send(JSON.parse(data))
    })
})

app.listen(PORT, () => {
    console.log(`Aplikasi sudah berjalan pada http://localhost:${PORT}`)
}) 
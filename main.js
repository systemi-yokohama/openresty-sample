'use strict'

const express = require('express')
const fs = require('fs')
const favicon = require('serve-favicon')
const app = express()
const port = 3000
const csvFileName = 'prefectures.csv'

app.use(favicon('favicon.ico'))

const getIndex = (req, res) => {
  fs.readFile('index.html', 'utf-8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' })
      res.write(error.message)
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
    }
    res.end()
  })
}

app.get('/', getIndex)
app.get('/index.html', getIndex)
app.get(`/data/${csvFileName}`, (req, res) => res.download(csvFileName))

app.listen(port, () => console.info(`Listening at http://localhost:${port}`))

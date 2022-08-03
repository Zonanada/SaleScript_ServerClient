const express = require("express");
const fs = require("fs");
const app = express();
const path = require('path');
const createSample = require("./saleScript/createSample.js")
// создаем парсер для данных в формате json
const jsonParser = express.json();

//Скрипт продаж
// app.use('/uploads', express.static(__dirname + '/saleScript/', 'readySimple'));
app.get('/download', function (req, res) {
    res.sendFile(path.join(__dirname + '/saleScript/', '/readySimple/', '123.xlsx'));
});

app.use(express.static(path.join(__dirname + '/saleScript/', 'build')));

app.get('/script', function (req, res) {
    res.sendFile(path.join(__dirname + '/saleScript/', 'build', 'index.html'));
});

app.post("/dataScript", jsonParser, function (request, response) {
    console.log('Пришёл post');
    if (!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно
    const dataScript = request.body;
    console.log(dataScript);
    createSample(dataScript);

});


app.listen(3001);
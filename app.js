const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));
const port = 3000;
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.listen(port, () => {
    console.log("servidor funcionando")
})
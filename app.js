const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.listen(port, () => {
    console.log(`Servidor correndo en puerto ${port}`);
})

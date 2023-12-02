const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);

});

app.listen(port, () => {
    console.log('server running at port ',port);
});
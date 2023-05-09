const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/FTK01', (req, res) => {
    res.render('pages/FTK01');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
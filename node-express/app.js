const express = require('express');

const PORT = 3000;
const app = express();

// app.get('/', (request, response) => {
//   response.send('<h1>Home</h1>');
// })

// app.get('/pepe', (request, response) => {
//   response.send('<h1>Hola Pepe</h1>');
// })

app.use(express.static('public')); // -->IMPORTANTE

app.get('/', (req, res) => {
  
  res.sendFile( __dirname + '/views/home.html');
})

app.get('/otra', (req, res) => {
  res.sendFile(__dirname + '/views/cat-page.html')
})

app.listen(PORT, () => {
  console.log(`Escucho en el puerto ${PORT}.`);
})
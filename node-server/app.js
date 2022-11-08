const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === '/pepe') {
    response.write('Hola Pepe. ¡¡Cuanto tiempo!!');
  } else if (url === '/ole') {
    response.write('ole');
  } else {
    response.statusCode = 404;
    response.write('Page not found');
  }
  response.end();
});

server.listen(PORT, () => {
  console.log(`Escucho en el pueto ${PORT}.`);
});

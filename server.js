const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'https://www.google.com' });
});

// TRATAMENTO DE ERRO PARA EVITAR CRASH
proxy.on('error', function (err, req, res) {
  console.error('Erro no proxy:', err.message);
  res.writeHead(502, { 'Content-Type': 'text/plain' });
  res.end('Erro ao conectar ao servidor de destino.');
});

server.listen(PORT, () => {
  console.log(`Proxy rodando na porta ${PORT}`);
});

const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'https://example.com' }); // Substitua pelo destino real
});

server.listen(PORT, () => {
  console.log(`Proxy rodando na porta ${PORT}`);
});


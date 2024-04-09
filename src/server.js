import http from 'node:http';

const server = http.createServer(( req, res)=> {
  const { method, url} = req

  if (method === 'GET' && url === '/users') {
    return res.end('Lista de usuários')
  }
   if (method === 'POST' && url === '/users') {
    return res.end('Criando usuário')
  }
  return res.end('Hello world')
})

server.listen(3333, ()=> {
    console.log('Server running on port 3333');
})



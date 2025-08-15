import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("Lista de usuários");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Usuário criado");
  }

  return res.end("Hello Ignite");
});

server.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});

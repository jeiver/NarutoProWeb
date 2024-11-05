import http from "http"

/* const http= require("http"); */

const server = http.createServer((request, response)=>{
response.end("Hola mundo, desde el Back (2)");
})
const PORT=8080;

server.listen(PORT, ()=>{
console.log(`server listening on port: ${PORT}`);
}).on('error', (error)=>{
console.error(`error in server on port ${PORT}`);
});
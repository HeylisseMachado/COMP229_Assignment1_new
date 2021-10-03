
import http from 'http';
import fs from 'fs';
import { toASCII } from 'punycode';

const hostname: string = '127.0.0.1' // local host 
const port: number = 3000;

console.log(port);

// to instanciate my server 
const server: http.Server =http.createServer((req,res) => {

    res.setHeader('Content-Type', 'text/plain');
    displayHome(res);
});


server.listen (port, hostname, () => {
    console.log (`server runing at ${hostname}: ${port}`);
})
function displayHome(res:http.ServerResponse): void{
    fs.readFile("index.html",(err,data) =>{
        if (err){
            res.writeHead(404);
            res.end('ERROR:404 - page not found');
            console.log('Error');
        }
        res.writeHead(200);
        res.end(data);
    })
}
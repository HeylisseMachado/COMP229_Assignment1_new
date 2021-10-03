"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const hostname = '127.0.0.1';
const port = 3000;
console.log(port);
const server = http_1.default.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    displayHome(res);
});
server.listen(port, hostname, () => {
    console.log(`server runing at ${hostname}: ${port}`);
});
function displayHome(res) {
    fs_1.default.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('ERROR:404 - page not found');
            console.log('Error');
        }
        res.writeHead(200);
        res.end(data);
    });
}
//# sourceMappingURL=index.js.map
const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'application/json'})
    const info = {
        name: 'Jenny',
        age: 16
    }

   res.end(JSON.stringify(info))

})

server.listen(5000);
console.log("Server running on port 5000...");
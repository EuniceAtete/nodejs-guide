const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.method == 'POST' && req.url == '/loginInfo'){
        let body = '';

        req.on('data', part => {
            body += part.toString();
        })
        req.on('end', () => {
            let parsedData = JSON.parse(body);
            console.log(parsedData);

            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({
            message: 'Data received! Your data is:',
            data: parsedData
            }));
        });

       
    } else {
        res.writeHead(404);
        res.write("Page Not Found");
        res.end()
    }
})

server.listen(6000);
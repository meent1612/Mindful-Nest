const express = require('express');
const {co2} = require('@tgwf/co2');
const app = express();
const port = 3000; 

const co2Emission = new co2({model : 'swd'});

app.use((req, res, next) => {
    let requestBytes = 0;
    let responseBytes = 0;

    if(req.body){
        requestBytes = Buffer.byteLength(JSON.stringify(req.body), 'utf8');
    }
    if(req.query){
        requestBytes += Buffer.byteLength(JSON.stringify(req.query), 'utf8');
    }
    if(req.headers){
        requestBytes += Buffer.byteLength(JSON.stringify(req.headers), 'utf8');
    }

    const originalWrite = res.write;
    const originalEnd = res.end;

    res.write = function(chunk) {
        if(chunk){
            responseBytes += Buffer.byteLength(chunk, 'utf8');
        }   
        originalWrite.apply(res, arguments);
    };
    res.end = function(chunk) {
        if(chunk){
            responseBytes += Buffer.byteLength(chunk, 'utf8');
        }

        res.locals.totalBytes += requestBytes + responseBytes;

        const greenHost = false; 
        const emissions = co2Emission.perByte(res.locals.totalBytes, greenHost);

        console.log(`Data transferred: ${res.locals.totalBytes} bytes`);
        console.log(`Estimated CO2 Emissions: ${emissions.gCO2.toFixed(2)} grams`);
        originalEnd.apply(res,arguments);
    };
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.post('/data', (req, res) => {
    res.json({message: 'Data received', data: req.body});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

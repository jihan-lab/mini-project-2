const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

let db = [
    {
        id: 1,
        name: 'Laptop',
        quantity: 12,
        price: 5000000,
    },
    {
        id: 2,
        name: 'Smartphone',
        quantity: 11,
        price: 5000000,
    },
];

app.get('/', (request, response) => response.send('Welcome to Angin Ribut Official'));

// GET
app.get('/list', (request, response) => {
    return response.json(db);
});

// GET by id
app.get('/list/:id', (request, response) => {
    const result = db.filter(val => {
        return val.id == request.params.id;
    });
    return response.json(result);
});

// POST
app.post('/list', (request, response) => {
    const newList = {
        id: db.length + 1,
        name: request.body.name,
        quantity: request.body.quantity,
        price: request.body.price,
    };

    db.push(newList);

    return response.json(newList);
});

// PUT
app.put('/list/:id', (request, response) => {
    const theList = db.filter(val => {
        return val.id == request.params.id;
    });

    if (theList === null) {
        return response.json('Not Found');
    }

    const newList = {
        id: theList[0].id,
        name: request.body.name || theList[0].name,
        quantity: request.body.quantity || theList[0].quantity,
        price: request.body.price || theList[0].price,
    };


    db[newList];

    return response.json(newList);
});

// DELETE
app.delete('/list/:id', (request, response) => {
    db = db.filter(val => {
        return val.id != request.params.id;
    });

    return response.json(db);
});

// menjalankan server
app.listen(3000, () => console.log('listenig on localhost:3000'));
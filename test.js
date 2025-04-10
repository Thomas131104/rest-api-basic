import { RestfulAPI } from './restful.js';

const api = new RestfulAPI('http://localhost:3000/Composer');

// Test GET all
api.get_all();

// Test GET by index
api.get(1);

// Test POST
api.post({
    name: 'Tchaikovsky',
    instruments: ['Piano', 'Violin']
});

// Test PUT
api.put(2, {
    name: 'Bach (edited)',
    instruments: ['Harpsichord', 'Organ']
});

// Test DELETE
api.delete(3);

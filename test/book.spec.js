const supertest = require('supertest');
const app = require('../app');

describe("GET /api/books", () => {
    it("Respond with JSON", () => {
        supertest(app).get('/api/books')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
            });
    });
});
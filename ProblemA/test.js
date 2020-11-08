let chai = require ('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = `http://localhost:3000/api/`;

describe('Send Words', () => {
    it('Send Testing Words', (done) => {
       chai.request(url)
        .post('/words')
        .send({
            number_cases: 3,
            cases:["this is a test", "second line", "this is the end"]
        })
        .end(function(err,res){
            expect(res).to.have.status(200)
        })
        done();        
    })
})


describe('Send Words', () => {
    it('Send Testing Words', (done) => {
       chai.request(url)
        .post('/words')
        .send({
            number_cases: 0,
            cases:[]
        })
        .end(function(err,res){
            expect(res).to.have.status(400)
        })
        done();        
    })
})



  

let chai = require ('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = `http://localhost:3000/api/${process.env.APP_VERSION}`;
//created first user whitouth AUTH
describe('Created User Whit Admin Profile', () => {
    it('Created New User Admin', (done) => {
       chai.request(url)
        .post('/admin/newUser')
        .send({
            account: "Augusto.093@gmail.com",
            password: "Augusto.93123",
            name: "Augusto",
            lastname:"Godoy",
            DNI: 37208505,
            Profile:"2be7c9eb-a575-4c93-8863-641fe1ae2a46"
        })
        .end(function(err,res){
            expect(res).to.have.status(200)
        })
        done();
        
    })
})



  

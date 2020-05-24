const chai = require('chai');
const index = require('../index');

const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

describe('Test Server', () => {
  it('server is working correctly', (done) => {
    chai
      .request(index)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.message).to.equals('It is working');
        done();
      });
  });
});

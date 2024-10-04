const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
	describe('Integration Testing', () => {
		describe('GET /', () => {
			it('returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
				const options = {
					uri = 'http://localhost:7865',
					method: 'GET',
				};

				request(options, function(error, response, body) {
					expect(response.statusCode).to.equal(200);
					expect(body).to.equal('Welcome to the payment system');
					done();
				});
			});
		});
	});
})

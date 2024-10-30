// import chai from 'chai';
const chai = require('chai')
const expect = chai.expect
const request = require('supertest')

describe('Login', ()=>{

    it('should login successfully with valid credentials', () => {
        const body = {
          phoneNumber,
          password,
          device_id, // Replace with your device ID
          fcmId: '', // Replace with your FCM ID
        };
    
        // Generate Signature (if required by your API)
        // ... (implementation using crypto-js based on your signature generation logic)
    
        request(baseUrl)
          .post('/customer/api/mobile/authentication/login')
          .set('Content-Type', 'application/json')
          .set('apps', apps)
          // Add signature header if generated
          // .set('signature', generatedSignature)
          .send(body)
          .expect(200)
          .expect((res) => {
            expect(res.body).to.have.property('status', '00');
            expect(res.body).to.have.property('message', 'Success');
            // Add assertions for other expected response properties
          })
          
    });
})
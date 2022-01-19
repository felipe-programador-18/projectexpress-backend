const clientsControllers = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')


describe('clients controllers',  () => {
   it('return all clients', () => {
       let res = {
           send: function(){}
       }
       let mock = sinon.mock(res)
       mock.expects('send').once().withArgs('fullstack master')
       clientsControllers.create({}, res)
   })
})
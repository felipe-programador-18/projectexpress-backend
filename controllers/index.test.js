const indexControlle = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')


describe('index controllers',  () => {
    it('Home', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs(' very bad')
        indexControlle.home({}, res)
    })

    it('calcu', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('calculadora')
        indexControlle.calcu({query: {}}, res)
    })

    it('calcs', () => {
        let res = {
            send: function(){}
        }
       let req = {
           query: {
               num1: '30',
               num2: '10'
           }
        } 

        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('the some is:40')
        indexControlle.calcu(req, res)
    })
})
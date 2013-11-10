require 'udefine/global'
bodyguard = require '../dist/bodyguard'
{expect} = require 'chai'


describe 'bodyguard', ->
  it 'is a function', ->
    expect(bodyguard).to.be.a('function')

  it 'throws an exception when no name is defined', ->
    expect(-> bodyguard()).to.throw(Error)
    
  it 'returns undefined if no definition or object is defined', ->
    expect(bodyguard('test')).to.be.a('undefined')
    expect(bodyguard('test')).to.equal(undefined)

  it 'has silence property', ->
    expect(bodyguard).to.have.a.property('silent')

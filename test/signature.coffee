require 'udefine/global'
bodyguard = require '../dist/bodyguard'
{expect} = require 'chai'


describe 'bodyguard', ->
  it 'is a function', ->
    expect(bodyguard).to.be.a('function')

  it 'has silence property', ->
    expect(bodyguard).to.have.a.property('silent')

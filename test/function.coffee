require 'udefine/global'
bodyguard = require '../dist/bodyguard'
{expect} = require 'chai'

class Parent
  constructor: ->
    
  a: -> 5
  b: -> 7

methods = ['a', 'b']

ReturnedClass = bodyguard 'ReturnedClass', methods, new Parent()
instance = new ReturnedClass()

describe 'bodyguard', ->
  it 'returns a new class', ->
    expect(ReturnedClass).to.be.a('function')

  it 'Returned class can be instantiated', ->
    expect(instance).to.be.a('object')

  it 'Returned class has methods according to the parent class', ->
    expect(instance).to.have.a.property('a')
    expect(instance).to.have.a.property('b')
    
  it 'Methods have correct return values', ->
    expect(instance.a()).to.equal(5)
    expect(instance.b()).to.equal(7)

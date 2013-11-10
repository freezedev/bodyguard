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
    expect(newClass).to.be.a('function')

  it 'Returned class can be instantiated', ->

  it 'Returned class has methods according to the parent class', ->
    expect(newClass).to.have.a.property('a')
    expect(newClass).to.have.a.property('b')
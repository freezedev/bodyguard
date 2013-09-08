udefine 'guardian', ->
  
  noop = ->

  guardian = (definition, obj, options) ->
    result = {}
    
    if Array.isArray definition
      for method in definition
        if method.indexOf(':') >= 1 and method.indexOf('()')

  guardian.typeCheck = 'manual'
  guardian.paramCheck = 'manual'
  
  guardian.strict = false

  guardian
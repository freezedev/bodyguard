udefine 'guardian', ->
  
  noop = ->

  bodyguard = (definition, obj, context) ->
    result = {}
    
    if Array.isArray definition
      for method in definition
        if obj[method]?
          obj[method] = noop
          

  bodyguard
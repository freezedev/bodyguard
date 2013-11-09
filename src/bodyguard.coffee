udefine 'bodyguard', ->
  
  noop = ->

  bodyguard = (name, definition, obj) ->
    returnFunction = ->
    returnFunction.constructor.name = name
    
    if Array.isArray definition
      for method in definition
        returnFunction::[method] = obj[method] or noop
          
    returnFunction
          

  bodyguard
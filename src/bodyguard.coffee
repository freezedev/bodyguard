udefine 'bodyguard', ->
  
  noop = ->
    
  bind = (func, context) -> func.apply context, arguments if func?

  bodyguard = (name, definition, obj) ->
    returnFunction = ->
    returnFunction.constructor.name = name
    
    if Array.isArray definition
      for method in definition
        if obj[method]?
          returnFunction::[method] = obj[method] or noop
        else
          unless bodyguard.silent
            console?.warn?("Method #{method} is not implemented.")
          returnFunction::[method] = -> bind obj[method], @
          
    returnFunction
          
  bodyguard.silent = true

  bodyguard
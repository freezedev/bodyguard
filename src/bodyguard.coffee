udefine 'bodyguard', ->
  
  noop = ->

  bodyguard = (definition, obj, context) ->
    context or= {}
    
    if Array.isArray definition
      for method in definition
        if obj[method]?
          obj[method] = noop
          
    context
          

  bodyguard
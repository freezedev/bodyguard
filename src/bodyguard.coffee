udefine 'bodyguard', ->
  
  noop = ->
    
  bind = (func, context) -> func.apply context, arguments if func?

  bodyguard = (name, definition, obj) ->
    throw new Error 'Bodyguard function needs to have a name' unless name
    return undefined unless definition and obj
    
    returnable = {}
    returnable[name] = ->
    returnable[name].constructor.name = name
    
    if Array.isArray definition
      for method in definition
        if obj[method]?
          returnable[name]::[method] = obj[method] or noop
        else
          unless bodyguard.silent
            console?.warn?("Method #{method} is not implemented.")
          returnable[name]::[method] = -> bind obj[method], @
          
    returnable[name]
          
  bodyguard.silent = true

  bodyguard
  
# Our current CommonJS workaround
if udefine.env.commonjs
  udefine.require 'bodyguard', (bodyguard) -> module.exports = bodyguard
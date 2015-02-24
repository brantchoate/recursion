// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(obj === null) {
    return "null";
  }

  if(typeof(obj) === 'number' || typeof(obj) === 'boolean'){
    return obj.toString();
  }

  if(obj.constructor === Object && typeof(obj) !== 'function') {
    for(k in obj) {
      if(typeof(obj[k]) === 'function') {
        return '{}';
      }
    }

    if(Object.keys(obj).length === 0) {
      return '{}';
    }

    var objKeys = Object.keys(obj);

    return '{' + 
      objKeys.map(function(el, i){
        var key = stringifyJSON(el);
        var val = stringifyJSON(obj[el]);
        return key +':' + val;
      })
  + '}';

  }
  if(typeof(obj) === 'string') {
    return "\""+ obj + "\"";
  }

  if(obj.constructor === Array) {
    for (var i = 0; i < obj.length; i++) {
      if(obj.length){
        obj[i] = stringifyJSON(obj[i]);
      } else {
        return false;
      }
    }
    return "["+ obj + "]";
  }
};

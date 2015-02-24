// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var arr = [];
  var iterate = function(node) {
    if(node.nodeType === document.ELEMENT_NODE) {
      if(node.className.indexOf(className) > -1) {
        arr.push(node);
      }
      for (var i = 0; i < node.childNodes.length; i++) {
        if(node.childNodes.length){
          iterate(node.childNodes[i]);
        } else {
          return false;
        }
      }
    }
  };

  iterate(document.body);
  return arr;
};

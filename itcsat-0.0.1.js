( function ( global ) {
  var document = global.document;
  var arr = [];
  var push = arr.push;

  function itcast ( selector ){
    return new itcast.fn.init( selector );
  }

  itcast.fn = itcast.prototype = {
    constructor: itcast
  };

  var init = itcast.fn.init = function ( selector ){

  }

  init.prototype = itcast.fn;
  // 将itcast函数暴露到全局 或者 支持模块化开发 以及 NodeJS
  // support RequireJS and SeaJs
  if( typeof define === 'function' ){
    define( function (){
      return itcast;
    } );
  }
  // support NodeJS
  else if ( typeof exports !== 'undefined' ){
    module.exports = itcast;
  }

  global.$ = itcast;
}( window ) );
( function ( global ){

  function itcast ( selector ){
    return new itcast.fn.init( selector );
  }

  itcast.fn = itcast.prototype = {
    constructor: itcast
  };

  var init = itcast.fn.init = function ( selector ){

  };

  init.prototype = itcast.fn;

  itcast.extend = function (){
    var args = arguments,
        i = 0,
        l = args.length,
        obj;

    for ( ; i < l; i++ ){
      obj = args[ i ];
      for ( var k in obj ){
        if ( obj.hasOwnProperty( k ) ){
          this[ k ] = obj[ k ];
        }
      }
    }

    return this;

  };

  // 添加类型判断方法
  itcast.extend( {
    isString: function (){},
    isHTML: function (){},
    isDOM: function (){},
    isArrayLike: function (){},
    isFunction: function (){},
    isWindow: function (){}
  } );

  if ( typeof define === 'function' ){
    define( function (){
      return itcast;
    } );
  }
  else if( typeof exports !== 'undefined' ){
    module.exports = itcast;
  } else {
    global.$ = itcast;
  }
  
}( window ) );
( function ( global ){
  var document = global.document,
      arr = [],
      push = arr.push;

  // function init ( selector ) {
  //   // 将存储DOM元素方式改变成 伪数组
  //   // this.elements = document.querySelectorAll( selector );
  //   push.apply( this, document.querySelectorAll( selector ) );
  // }

  var createInit = function ( selector ) {
    return new createInit.prototype.init( selector );
  }

  createInit.prototype = {
    constructor: createInit
  };

  var init = createInit.prototype.init = function ( selector ) {
    // 将存储DOM元素方式改变成 伪数组
    // this.elements = document.querySelectorAll( selector );
    push.apply( this, document.querySelectorAll( selector ) );
  };

  init.prototype = createInit.prototype;

  global.$ = createInit;
}( window ) );
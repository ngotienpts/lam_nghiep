
document.addEventListener("DOMContentLoaded", function () {
    // get height header
    var heightHeader = document.querySelector('#header');
    var main = document.querySelector('#main');
    const app = {
      // get height cua header day main theo chieu cao cua header
      pushMain:function(){
          if(heightHeader){
              if(main){
                  main.style.marginTop = heightHeader.offsetHeight + 'px';
              }
          }
      },
      // su ly cac su kien
      handleEvent: function () {
        const _this = this;
        
        // hide cac element khi click ra ngoai
        document.addEventListener('click',function(e){
          
        })
      },
      // window scroll
      windowScroll:function(){
        var _this = this;
        window.onscroll = function(){
          
        }
      },
      // khoi tao function start
      start: function () {
        // get height cua header day main theo chieu cao cua header
        this.pushMain();
        // su ly cac su kien
        this.handleEvent();
        // window scroll
        this.windowScroll();
      },
    };
  
    app.start();
  });

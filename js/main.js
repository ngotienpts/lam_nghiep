
document.addEventListener("DOMContentLoaded", function () {
    // get height header
    var heightHeader = document.querySelector('#header');
    var main = document.querySelector('#main');

    // login
    var openLogin = document.querySelectorAll('.header-right-item__login');
    var popupLogin = document.querySelector('.login-wrapper');
    var loginField = document.querySelector('.login-field');
    var closeLogin = document.querySelector('.login-close');
    var changeRegister = document.querySelector('.register-now');

    // register
    var openRegister = document.querySelectorAll('.header-right-item__register');
    var popupRegister = document.querySelector('.register-wrapper');
    var registerField = document.querySelector('.register-field');
    var closeRegister = document.querySelector('.register-close');
    var changeLogin = document.querySelector('.login-now');

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
        
        // show login form
        if(openLogin){
          openLogin.forEach(function(login){
            login.onclick = function(){
              if(popupLogin.classList.contains('open')){
                popupLogin.classList.remove('open')
              }else {
                popupLogin.classList.add('open');
                popupRegister.classList.remove('open');
              }
            }
          })
          // close login form
          if(closeLogin){
            closeLogin.onclick = function(){
              if(popupLogin){
                popupLogin.classList.remove('open')
              }
            }
          }
          //change register
          if(changeRegister){
            changeRegister.onclick = function(){
              popupLogin.classList.remove('open');
              popupRegister.classList.add('open');
            }
          }
        }

        // show register form
        if(openRegister){
          openRegister.forEach(function(register){
            register.onclick = function(){
              if(popupRegister.classList.contains('open')){
                popupRegister.classList.remove('open')
              }else {
                popupRegister.classList.add('open');
                popupLogin.classList.remove('open');
              }
            }
          })
          // close login form
          if(closeRegister){
            closeRegister.onclick = function(){
              if(popupRegister){
                popupRegister.classList.remove('open')
              }
            }
          }
          //change login
          if(changeLogin){
            changeLogin.onclick = function(){
              popupRegister.classList.remove('open');
              popupLogin.classList.add('open');
            }
          }
        }


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


document.addEventListener("DOMContentLoaded", function () {
    // get height header
    var heightHeader = document.querySelector('#header');
    var main = document.querySelector('#main');
    var cateHot = document.querySelector('.categiry-hot-mb');
    

    // login
    var openLogin = document.querySelectorAll('.header-right-item__login');
    var popupLogin = document.querySelector('.login-wrapper');
    var closeLogin = document.querySelector('.login-close');
    var changeRegister = document.querySelector('.register-now');

    // register
    var openRegister = document.querySelectorAll('.header-right-item__register');
    var popupRegister = document.querySelector('.register-wrapper');
    var closeRegister = document.querySelector('.register-close');
    var changeLogin = document.querySelector('.login-now');

    // show menu tablet & mobile
    var openMenu = document.querySelector('.header-right-bar');
    var popupMenu = document.querySelector('.menu-mb-wrapper');
    var menuField = document.querySelector('.menu-mb-field');
    var closeMenu = document.querySelector('.close-menu-mb');

    // back to top
    var backTop = document.querySelector('.back-top');


    const app = {
      // get height cua header day main theo chieu cao cua header
      pushMain:function(){
          if(heightHeader && heightHeader.clientWidth > 414){
              if(main){
                  main.style.marginTop = heightHeader.offsetHeight + 'px';
              }
          }
          if(heightHeader.clientWidth <= 414){
            if(cateHot){
              cateHot.style.marginTop = heightHeader.offsetHeight + 'px';
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
                popupMenu.classList.remove('open')
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
                popupMenu.classList.remove('open')
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

        // show menu mb
        if(openMenu){
          openMenu.onclick = function(){
            if(popupMenu){
              if(popupMenu.classList.contains('open')){
                popupMenu.classList.remove('open');
                menuField.classList.remove('open');
              }else {
                popupMenu.classList.add('open');
                menuField.classList.add('open');
              }
            }
          };
          if(closeMenu){
            closeMenu.onclick = function(){
              popupMenu.classList.remove('open');
              menuField.classList.remove('open');
            }
          }
        }
        // hide cac element khi click ra ngoai
        document.addEventListener('click',function(e){
          
        })
      },
      // back top
      backTopHandler:function(){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          backTop.style.cssText = "visibility: visible"
        }else {
          backTop.style.cssText = "visibility: collapse"
        }
      },
      // sticky sidebar
      stickySlidebar:function(){
        $('.leftSidebar, .rightSidebar').theiaStickySidebar({
          'containerSelector':'#main',
          'additionalMarginTop': 0,
          'additionalMarginBottom': 20,
        });
      },
      // window scroll
      windowScroll:function(){
        var _this = this;
        window.onscroll = function(){
          _this.backTopHandler();
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
        // sticky sidebar
        this.stickySlidebar();
      },
    };
  
    app.start();
  });

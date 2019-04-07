document.addEventListener("DOMContentLoaded", function(event) { 
    var mobOpenMenu = document.querySelector(".header .hamburger"),
        mobCloseMenu = document.querySelector(".header .mob-menu__close"),
        mobOpenPhones = document.querySelector(".header .header-top__phone_open"),
        mobWrapPhones = document.querySelector(".header .header-top__phone-list"),
        mobWrapMenu = document.querySelector(".header .header-nav");
    mobOpenPhones.addEventListener('click', function(e){
        mobWrapPhones.classList.toggle("block-show");
    });
    
    mobOpenMenu.addEventListener('click', function(e){
        mobWrapMenu.classList.add("block-show");
    });

    mobCloseMenu.addEventListener('click', function(e){
        mobWrapMenu.classList.remove("block-show");
    });


    var headerFixed = document.querySelector(".header .header-top"),
        headerFixedBottom = headerFixed.getBoundingClientRect().bottom + window.pageYOffset;
    window.onscroll = function() {
        if (headerFixed.classList.contains('header-top_fixed') && window.pageYOffset < headerFixedBottom ) {
            headerFixed.classList.remove('header-top_fixed');
        } else if (window.pageYOffset > headerFixedBottom ) {
            headerFixed.classList.add('header-top_fixed');
        }
        };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxyXG4gICAgdmFyIG1vYk9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgLmhhbWJ1cmdlclwiKSxcclxuICAgICAgICBtb2JDbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAubW9iLW1lbnVfX2Nsb3NlXCIpLFxyXG4gICAgICAgIG1vYk9wZW5QaG9uZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAuaGVhZGVyLXRvcF9fcGhvbmVfb3BlblwiKSxcclxuICAgICAgICBtb2JXcmFwUGhvbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgLmhlYWRlci10b3BfX3Bob25lLWxpc3RcIiksXHJcbiAgICAgICAgbW9iV3JhcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAuaGVhZGVyLW5hdlwiKTtcclxuICAgIG1vYk9wZW5QaG9uZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBtb2JXcmFwUGhvbmVzLmNsYXNzTGlzdC50b2dnbGUoXCJibG9jay1zaG93XCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIG1vYk9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgbW9iV3JhcE1lbnUuY2xhc3NMaXN0LmFkZChcImJsb2NrLXNob3dcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2JDbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBtb2JXcmFwTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2stc2hvd1wiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgaGVhZGVyRml4ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAuaGVhZGVyLXRvcFwiKSxcclxuICAgICAgICBoZWFkZXJGaXhlZEJvdHRvbSA9IGhlYWRlckZpeGVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChoZWFkZXJGaXhlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci10b3BfZml4ZWQnKSAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCBoZWFkZXJGaXhlZEJvdHRvbSApIHtcclxuICAgICAgICAgICAgaGVhZGVyRml4ZWQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLXRvcF9maXhlZCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gaGVhZGVyRml4ZWRCb3R0b20gKSB7XHJcbiAgICAgICAgICAgIGhlYWRlckZpeGVkLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10b3BfZml4ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=

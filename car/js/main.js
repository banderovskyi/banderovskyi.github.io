document.addEventListener("DOMContentLoaded", function(event) { 
    var htmlWrap = document.querySelector("html"),
        mobOpenMenu = document.querySelector(".header .hamburger"),
        mobCloseMenu = document.querySelector(".header .mob-menu__close"),
        mobOpenPhones = document.querySelector(".header .header-top__phone_open"),
        mobWrapPhones = document.querySelector(".header .header-top__phone-list"),
        mobWrapMenu = document.querySelector(".header .header-nav");

    mobOpenPhones.addEventListener('click', function(e){
        mobWrapPhones.classList.toggle("block-show");
    });
    
    mobOpenMenu.addEventListener('click', function(e){
        mobWrapMenu.classList.add("block-show");
        htmlWrap.classList.add("no-scroll");
    });

    mobCloseMenu.addEventListener('click', function(e){
        mobWrapMenu.classList.remove("block-show");
        htmlWrap.classList.remove("no-scroll");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxyXG4gICAgdmFyIGh0bWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICAgICAgbW9iT3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAuaGFtYnVyZ2VyXCIpLFxyXG4gICAgICAgIG1vYkNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIC5tb2ItbWVudV9fY2xvc2VcIiksXHJcbiAgICAgICAgbW9iT3BlblBob25lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIC5oZWFkZXItdG9wX19waG9uZV9vcGVuXCIpLFxyXG4gICAgICAgIG1vYldyYXBQaG9uZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAuaGVhZGVyLXRvcF9fcGhvbmUtbGlzdFwiKSxcclxuICAgICAgICBtb2JXcmFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIC5oZWFkZXItbmF2XCIpO1xyXG5cclxuICAgIG1vYk9wZW5QaG9uZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBtb2JXcmFwUGhvbmVzLmNsYXNzTGlzdC50b2dnbGUoXCJibG9jay1zaG93XCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIG1vYk9wZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgbW9iV3JhcE1lbnUuY2xhc3NMaXN0LmFkZChcImJsb2NrLXNob3dcIik7XHJcbiAgICAgICAgaHRtbFdyYXAuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vYkNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIG1vYldyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJibG9jay1zaG93XCIpO1xyXG4gICAgICAgIGh0bWxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIGhlYWRlckZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgLmhlYWRlci10b3BcIiksXHJcbiAgICAgICAgaGVhZGVyRml4ZWRCb3R0b20gPSBoZWFkZXJGaXhlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaGVhZGVyRml4ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItdG9wX2ZpeGVkJykgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgaGVhZGVyRml4ZWRCb3R0b20gKSB7XHJcbiAgICAgICAgICAgIGhlYWRlckZpeGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci10b3BfZml4ZWQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IGhlYWRlckZpeGVkQm90dG9tICkge1xyXG4gICAgICAgICAgICBoZWFkZXJGaXhlZC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdG9wX2ZpeGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9

$(function(){function e(){var e=$(window).scrollTop();e>100&&$(".menu").addClass("menu_fixed")}function o(){$(".header .nav").fadeIn(),$(".header .hamburger__close").fadeIn()}function n(){$(".header .nav").fadeOut(),$(".header .hamburger__close").fadeOut()}$(".open_popup").click(function(){var e=$("#"+$(this).attr("rel"));$(e).fadeIn(),$(".overlay").fadeIn(),$("body").css("overflow","hidden")}),$(".popup .close, .overlay").click(function(){$(".overlay, .popup").fadeOut(),$("body").css("overflow","auto")}),$(window).scroll(function(){$(window).width()>767&&($(this).scrollTop()>0?$(".menu").addClass("menu_fixed"):$(".menu").removeClass("menu_fixed"))}),e(),$("#nav").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),n=$(o).offset().top-100;$(window).width()<960&&(n=$(o).offset().top-30),$("body,html").animate({scrollTop:n},700)}),$(".faq-item__question-ico").click(function(){var e=$(this).parents(".faq-item");$(this).toggleClass("faq-item__question-ico_active"),e.find(".faq-item__answer").fadeToggle("slow")}),$(".hamburger__open").click(function(){o()}),$(".header .hamburger__close").click(function(){n()}),$(window).width()<993&&$(".header .nav__item").click(function(){n()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsInBvc2l0aW9uIiwidXNlclBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJvcGVuTWVudSIsImZhZGVJbiIsImNsb3NlTWVudSIsImZhZGVPdXQiLCJjbGljayIsInBvcHVwX2lkIiwidGhpcyIsImF0dHIiLCJjc3MiLCJzY3JvbGwiLCJ3aWR0aCIsInJlbW92ZUNsYXNzIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJ0b3AiLCJvZmZzZXQiLCJhbmltYXRlIiwicGVyZW50IiwicGFyZW50cyIsInRvZ2dsZUNsYXNzIiwiZmluZCIsImZhZGVUb2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFLFdBc0JBLFFBQVNDLEtBQ1AsR0FBSUMsR0FBZUYsRUFBRUcsUUFBUUMsV0FDMUJGLEdBQWUsS0FDaEJGLEVBQUUsU0FBU0ssU0FBUyxjQXVCeEIsUUFBU0MsS0FDUE4sRUFBRSxnQkFBZ0JPLFNBQ2xCUCxFQUFFLDZCQUE2Qk8sU0FFakMsUUFBU0MsS0FDUFIsRUFBRSxnQkFBZ0JTLFVBQ2xCVCxFQUFFLDZCQUE2QlMsVUFyRGpDVCxFQUFFLGVBQWVVLE1BQU0sV0FDbkIsR0FBSUMsR0FBV1gsRUFBRSxJQUFNQSxFQUFFWSxNQUFNQyxLQUFLLE9BQ3BDYixHQUFFVyxHQUFVSixTQUNaUCxFQUFFLFlBQVlPLFNBQ2RQLEVBQUUsUUFBUWMsSUFBSSxXQUFZLFlBRTlCZCxFQUFFLDJCQUEyQlUsTUFBTSxXQUMvQlYsRUFBRSxvQkFBb0JTLFVBQ3RCVCxFQUFFLFFBQVFjLElBQUksV0FBWSxVQUc5QmQsRUFBRUcsUUFBUVksT0FBTyxXQUNYZixFQUFFRyxRQUFRYSxRQUFVLE1BQ25CaEIsRUFBRVksTUFBTVIsWUFBYyxFQUN2QkosRUFBRSxTQUFTSyxTQUFTLGNBR3BCTCxFQUFFLFNBQVNpQixZQUFZLGlCQVU3QmhCLElBR0RELEVBQUUsUUFBUWtCLEdBQUcsUUFBUSxJQUFLLFNBQVVDLEdBQ25DQSxFQUFNQyxnQkFDTixJQUFJQyxHQUFNckIsRUFBRVksTUFBTUMsS0FBSyxRQUNyQlMsRUFBTXRCLEVBQUVxQixHQUFJRSxTQUFTRCxJQUFJLEdBQ2pCdEIsR0FBRUcsUUFBUWEsUUFBVSxNQUN0Qk0sRUFBTXRCLEVBQUVxQixHQUFJRSxTQUFTRCxJQUFJLElBRWpDdEIsRUFBRSxhQUFhd0IsU0FBU3BCLFVBQVdrQixHQUFNLE9BR3pDdEIsRUFBRSwyQkFBMkJVLE1BQU0sV0FDakMsR0FBSWUsR0FBU3pCLEVBQUVZLE1BQU1jLFFBQVEsWUFDN0IxQixHQUFFWSxNQUFNZSxZQUFZLGlDQUNwQkYsRUFBT0csS0FBSyxxQkFBcUJDLFdBQVcsVUFZOUM3QixFQUFFLG9CQUFvQlUsTUFBTSxXQUN4QkosTUFFSk4sRUFBRSw2QkFBNkJVLE1BQU0sV0FDbkNGLE1BRUVSLEVBQUVHLFFBQVFhLFFBQVUsS0FDdEJoQixFQUFFLHNCQUFzQlUsTUFBTSxXQUM1QkYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCl7XHJcbiAgJCgnLm9wZW5fcG9wdXAnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHBvcHVwX2lkID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoXCJyZWxcIikpO1xyXG4gICAgICAkKHBvcHVwX2lkKS5mYWRlSW4oKTtcclxuICAgICAgJCgnLm92ZXJsYXknKS5mYWRlSW4oKTtcclxuICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgfSk7XHJcbiAgJCgnLnBvcHVwIC5jbG9zZSwgLm92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm92ZXJsYXksIC5wb3B1cCcpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xyXG4gIH0pO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcclxuICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcclxuICAgICAgICAkKFwiLm1lbnVcIikuYWRkQ2xhc3MoXCJtZW51X2ZpeGVkXCIpO1xyXG4gICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAkKFwiLm1lbnVcIikucmVtb3ZlQ2xhc3MoXCJtZW51X2ZpeGVkXCIpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKCl7XHJcbiAgICB2YXIgdXNlclBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYodXNlclBvc2l0aW9uID4gMTAwKXtcclxuICAgICAgJChcIi5tZW51XCIpLmFkZENsYXNzKFwibWVudV9maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHBvc2l0aW9uKCk7XHJcblxyXG5cclxuXHQkKFwiI25hdlwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuXHRcdFx0XHR0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3AtMTAwO1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDk2MCkge1xyXG4gICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wLTMwO1xyXG4gICAgICAgfVxyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCA3MDApO1xyXG5cdH0pO1xyXG5cclxuICAkKFwiLmZhcS1pdGVtX19xdWVzdGlvbi1pY29cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHZhciBwZXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoXCIuZmFxLWl0ZW1cIik7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiZmFxLWl0ZW1fX3F1ZXN0aW9uLWljb19hY3RpdmVcIik7XHJcbiAgICBwZXJlbnQuZmluZChcIi5mYXEtaXRlbV9fYW5zd2VyXCIpLmZhZGVUb2dnbGUoXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKXtcclxuICAgICQoXCIuaGVhZGVyIC5uYXZcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiLmhlYWRlciAuaGFtYnVyZ2VyX19jbG9zZVwiKS5mYWRlSW4oKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIGNsb3NlTWVudSgpe1xyXG4gICAgJChcIi5oZWFkZXIgLm5hdlwiKS5mYWRlT3V0KCk7XHJcbiAgICAkKFwiLmhlYWRlciAuaGFtYnVyZ2VyX19jbG9zZVwiKS5mYWRlT3V0KCk7XHJcbiAgfTtcclxuICAkKFwiLmhhbWJ1cmdlcl9fb3BlblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICBvcGVuTWVudSgpO1xyXG4gIH0pO1xyXG4gICQoXCIuaGVhZGVyIC5oYW1idXJnZXJfX2Nsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBjbG9zZU1lbnUoKTtcclxuICB9KTtcclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA5OTMpIHtcclxuICAgICQoXCIuaGVhZGVyIC5uYXZfX2l0ZW1cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICB9KTtcclxuIH1cclxufSk7XHJcbiJdfQ==

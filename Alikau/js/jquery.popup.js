(function($) {
  $.fn.simplePopup = function(event) {
    var simplePopup = {
      settings: {
        hashtag: "#/",
        url: "popup",
        event: event || "click"
      },

      initialize: function(link) {
        var popup = $(".js__popup");
        var body = $(".js__p_body");
        var close = $(".js__p_close");
        var routePopup = simplePopup.settings.hashtag + simplePopup.settings.url;

        var cssClasses = link[0].className;

        if (cssClasses.indexOf(" ") >= 0) {
          cssClasses = cssClasses.split(" ");

          for (key in cssClasses) {
            if (cssClasses[key].indexOf("js__p_") === 0) {
              cssClasses = cssClasses[key]
            }
          };
        }

        var name = cssClasses.replace("js__p_", "");

        // We redefine the variables if there is an additional popap
        if (name !== "start") {
          name = name.replace("_start", "_popup");
          popup = $(".js__" + name);
          routePopup = simplePopup.settings.hashtag + name;
        };

        link.on(simplePopup.settings.event, function() {
          simplePopup.show(popup, body, routePopup);
          return false;
        });

        $(window).on("load", function() {
          simplePopup.hash(popup, body, routePopup);
        });

        body.on("click", function() {
          simplePopup.hide(popup, body);
        });

        close.on("click", function() {
          simplePopup.hide(popup, body);
          return false;
        });

        $(window).keyup(function(e) {
          if (e.keyCode === 27) {
            simplePopup.hide(popup, body);
          }
        });
      },


      centering: function(popup) {
        var marginLeft = -popup.width()/2;
        return popup.css("margin-left", marginLeft);
      },

      show: function(popup, body, routePopup) {
        simplePopup.centering(popup);
        body.removeClass("js__fadeout");
        popup.removeClass("js__slide_top");
        location.hash = routePopup;
      },

      hide: function(popup, body) {
        popup.addClass("js__slide_top");
        body.addClass("js__fadeout");
        location.hash = simplePopup.settings.hashtag;
      },

      hash: function(popup, body, routePopup) {
        if (location.hash === routePopup) {
          simplePopup.show(popup, body, routePopup);
        }
      }
    };


    return this.each(function() {
      var link = $(this);
      simplePopup.initialize(link);
    });
  };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcXVlcnkucG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcbiAgJC5mbi5zaW1wbGVQb3B1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHNpbXBsZVBvcHVwID0ge1xuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgaGFzaHRhZzogXCIjL1wiLFxuICAgICAgICB1cmw6IFwicG9wdXBcIixcbiAgICAgICAgZXZlbnQ6IGV2ZW50IHx8IFwiY2xpY2tcIlxuICAgICAgfSxcblxuICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24obGluaykge1xuICAgICAgICB2YXIgcG9wdXAgPSAkKFwiLmpzX19wb3B1cFwiKTtcbiAgICAgICAgdmFyIGJvZHkgPSAkKFwiLmpzX19wX2JvZHlcIik7XG4gICAgICAgIHZhciBjbG9zZSA9ICQoXCIuanNfX3BfY2xvc2VcIik7XG4gICAgICAgIHZhciByb3V0ZVBvcHVwID0gc2ltcGxlUG9wdXAuc2V0dGluZ3MuaGFzaHRhZyArIHNpbXBsZVBvcHVwLnNldHRpbmdzLnVybDtcblxuICAgICAgICB2YXIgY3NzQ2xhc3NlcyA9IGxpbmtbMF0uY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmIChjc3NDbGFzc2VzLmluZGV4T2YoXCIgXCIpID49IDApIHtcbiAgICAgICAgICBjc3NDbGFzc2VzID0gY3NzQ2xhc3Nlcy5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgICBmb3IgKGtleSBpbiBjc3NDbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoY3NzQ2xhc3Nlc1trZXldLmluZGV4T2YoXCJqc19fcF9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgY3NzQ2xhc3NlcyA9IGNzc0NsYXNzZXNba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmFtZSA9IGNzc0NsYXNzZXMucmVwbGFjZShcImpzX19wX1wiLCBcIlwiKTtcblxuICAgICAgICAvLyBXZSByZWRlZmluZSB0aGUgdmFyaWFibGVzIGlmIHRoZXJlIGlzIGFuIGFkZGl0aW9uYWwgcG9wYXBcbiAgICAgICAgaWYgKG5hbWUgIT09IFwic3RhcnRcIikge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCJfc3RhcnRcIiwgXCJfcG9wdXBcIik7XG4gICAgICAgICAgcG9wdXAgPSAkKFwiLmpzX19cIiArIG5hbWUpO1xuICAgICAgICAgIHJvdXRlUG9wdXAgPSBzaW1wbGVQb3B1cC5zZXR0aW5ncy5oYXNodGFnICsgbmFtZTtcbiAgICAgICAgfTtcblxuICAgICAgICBsaW5rLm9uKHNpbXBsZVBvcHVwLnNldHRpbmdzLmV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzaW1wbGVQb3B1cC5zaG93KHBvcHVwLCBib2R5LCByb3V0ZVBvcHVwKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2ltcGxlUG9wdXAuaGFzaChwb3B1cCwgYm9keSwgcm91dGVQb3B1cCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJvZHkub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzaW1wbGVQb3B1cC5oaWRlKHBvcHVwLCBib2R5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzaW1wbGVQb3B1cC5oaWRlKHBvcHVwLCBib2R5KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5rZXl1cChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHNpbXBsZVBvcHVwLmhpZGUocG9wdXAsIGJvZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG5cbiAgICAgIGNlbnRlcmluZzogZnVuY3Rpb24ocG9wdXApIHtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSAtcG9wdXAud2lkdGgoKS8yO1xuICAgICAgICByZXR1cm4gcG9wdXAuY3NzKFwibWFyZ2luLWxlZnRcIiwgbWFyZ2luTGVmdCk7XG4gICAgICB9LFxuXG4gICAgICBzaG93OiBmdW5jdGlvbihwb3B1cCwgYm9keSwgcm91dGVQb3B1cCkge1xuICAgICAgICBzaW1wbGVQb3B1cC5jZW50ZXJpbmcocG9wdXApO1xuICAgICAgICBib2R5LnJlbW92ZUNsYXNzKFwianNfX2ZhZGVvdXRcIik7XG4gICAgICAgIHBvcHVwLnJlbW92ZUNsYXNzKFwianNfX3NsaWRlX3RvcFwiKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHJvdXRlUG9wdXA7XG4gICAgICB9LFxuXG4gICAgICBoaWRlOiBmdW5jdGlvbihwb3B1cCwgYm9keSkge1xuICAgICAgICBwb3B1cC5hZGRDbGFzcyhcImpzX19zbGlkZV90b3BcIik7XG4gICAgICAgIGJvZHkuYWRkQ2xhc3MoXCJqc19fZmFkZW91dFwiKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHNpbXBsZVBvcHVwLnNldHRpbmdzLmhhc2h0YWc7XG4gICAgICB9LFxuXG4gICAgICBoYXNoOiBmdW5jdGlvbihwb3B1cCwgYm9keSwgcm91dGVQb3B1cCkge1xuICAgICAgICBpZiAobG9jYXRpb24uaGFzaCA9PT0gcm91dGVQb3B1cCkge1xuICAgICAgICAgIHNpbXBsZVBvcHVwLnNob3cocG9wdXAsIGJvZHksIHJvdXRlUG9wdXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsaW5rID0gJCh0aGlzKTtcbiAgICAgIHNpbXBsZVBvcHVwLmluaXRpYWxpemUobGluayk7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpOyJdLCJmaWxlIjoianF1ZXJ5LnBvcHVwLmpzIn0=

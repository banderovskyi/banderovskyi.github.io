!function(n){n.fn.simplePopup=function(s){var t={settings:{hashtag:"#/",url:"popup",event:s||"click"},initialize:function(s){var i=n(".js__popup"),e=n(".js__p_body"),o=n(".js__p_close"),a=t.settings.hashtag+t.settings.url,c=s[0].className;if(c.indexOf(" ")>=0){c=c.split(" ");for(key in c)0===c[key].indexOf("js__p_")&&(c=c[key])}var h=c.replace("js__p_","");"start"!==h&&(h=h.replace("_start","_popup"),i=n(".js__"+h),a=t.settings.hashtag+h),s.on(t.settings.event,function(){return t.show(i,e,a),!1}),n(window).on("load",function(){t.hash(i,e,a)}),e.on("click",function(){t.hide(i,e)}),o.on("click",function(){return t.hide(i,e),!1}),n(window).keyup(function(n){27===n.keyCode&&t.hide(i,e)})},centering:function(n){var s=-n.width()/2;return n.css("margin-left",s)},show:function(n,s,i){t.centering(n),s.removeClass("js__fadeout"),n.removeClass("js__slide_top"),location.hash=i},hide:function(n,s){n.addClass("js__slide_top"),s.addClass("js__fadeout"),location.hash=t.settings.hashtag},hash:function(n,s,i){location.hash===i&&t.show(n,s,i)}};return this.each(function(){var s=n(this);t.initialize(s)})}}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5wb3B1cC5qcyJdLCJuYW1lcyI6WyIkIiwiZm4iLCJzaW1wbGVQb3B1cCIsImV2ZW50Iiwic2V0dGluZ3MiLCJoYXNodGFnIiwidXJsIiwiaW5pdGlhbGl6ZSIsImxpbmsiLCJwb3B1cCIsImJvZHkiLCJjbG9zZSIsInJvdXRlUG9wdXAiLCJjc3NDbGFzc2VzIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsInNwbGl0Iiwia2V5IiwibmFtZSIsInJlcGxhY2UiLCJvbiIsInNob3ciLCJ3aW5kb3ciLCJoYXNoIiwiaGlkZSIsImtleXVwIiwiZSIsImtleUNvZGUiLCJjZW50ZXJpbmciLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImxvY2F0aW9uIiwiYWRkQ2xhc3MiLCJ0aGlzIiwiZWFjaCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBVUEsR0FDUkEsRUFBRUMsR0FBR0MsWUFBYyxTQUFTQyxHQUMxQixHQUFJRCxJQUNGRSxVQUNFQyxRQUFTLEtBQ1RDLElBQUssUUFDTEgsTUFBT0EsR0FBUyxTQUdsQkksV0FBWSxTQUFTQyxHQUNuQixHQUFJQyxHQUFRVCxFQUFFLGNBQ1ZVLEVBQU9WLEVBQUUsZUFDVFcsRUFBUVgsRUFBRSxnQkFDVlksRUFBYVYsRUFBWUUsU0FBU0MsUUFBVUgsRUFBWUUsU0FBU0UsSUFFakVPLEVBQWFMLEVBQUssR0FBR00sU0FFekIsSUFBSUQsRUFBV0UsUUFBUSxNQUFRLEVBQUcsQ0FDaENGLEVBQWFBLEVBQVdHLE1BQU0sSUFFOUIsS0FBS0MsTUFBT0osR0FDZ0MsSUFBdENBLEVBQVdJLEtBQUtGLFFBQVEsWUFDMUJGLEVBQWFBLEVBQVdJLE1BSzlCLEdBQUlDLEdBQU9MLEVBQVdNLFFBQVEsU0FBVSxHQUczQixXQUFURCxJQUNGQSxFQUFPQSxFQUFLQyxRQUFRLFNBQVUsVUFDOUJWLEVBQVFULEVBQUUsUUFBVWtCLEdBQ3BCTixFQUFhVixFQUFZRSxTQUFTQyxRQUFVYSxHQUc5Q1YsRUFBS1ksR0FBR2xCLEVBQVlFLFNBQVNELE1BQU8sV0FFbEMsTUFEQUQsR0FBWW1CLEtBQUtaLEVBQU9DLEVBQU1FLElBQ3ZCLElBR1RaLEVBQUVzQixRQUFRRixHQUFHLE9BQVEsV0FDbkJsQixFQUFZcUIsS0FBS2QsRUFBT0MsRUFBTUUsS0FHaENGLEVBQUtVLEdBQUcsUUFBUyxXQUNmbEIsRUFBWXNCLEtBQUtmLEVBQU9DLEtBRzFCQyxFQUFNUyxHQUFHLFFBQVMsV0FFaEIsTUFEQWxCLEdBQVlzQixLQUFLZixFQUFPQyxJQUNqQixJQUdUVixFQUFFc0IsUUFBUUcsTUFBTSxTQUFTQyxHQUNMLEtBQWRBLEVBQUVDLFNBQ0p6QixFQUFZc0IsS0FBS2YsRUFBT0MsTUFNOUJrQixVQUFXLFNBQVNuQixHQUNsQixHQUFJb0IsSUFBY3BCLEVBQU1xQixRQUFRLENBQ2hDLE9BQU9yQixHQUFNc0IsSUFBSSxjQUFlRixJQUdsQ1IsS0FBTSxTQUFTWixFQUFPQyxFQUFNRSxHQUMxQlYsRUFBWTBCLFVBQVVuQixHQUN0QkMsRUFBS3NCLFlBQVksZUFDakJ2QixFQUFNdUIsWUFBWSxpQkFDbEJDLFNBQVNWLEtBQU9YLEdBR2xCWSxLQUFNLFNBQVNmLEVBQU9DLEdBQ3BCRCxFQUFNeUIsU0FBUyxpQkFDZnhCLEVBQUt3QixTQUFTLGVBQ2RELFNBQVNWLEtBQU9yQixFQUFZRSxTQUFTQyxTQUd2Q2tCLEtBQU0sU0FBU2QsRUFBT0MsRUFBTUUsR0FDdEJxQixTQUFTVixPQUFTWCxHQUNwQlYsRUFBWW1CLEtBQUtaLEVBQU9DLEVBQU1FLElBTXBDLE9BQU91QixNQUFLQyxLQUFLLFdBQ2YsR0FBSTVCLEdBQU9SLEVBQUVtQyxLQUNiakMsR0FBWUssV0FBV0MsT0FHMUI2QiIsImZpbGUiOiJqcXVlcnkucG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xuICAkLmZuLnNpbXBsZVBvcHVwID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgc2ltcGxlUG9wdXAgPSB7XG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBoYXNodGFnOiBcIiMvXCIsXG4gICAgICAgIHVybDogXCJwb3B1cFwiLFxuICAgICAgICBldmVudDogZXZlbnQgfHwgXCJjbGlja1wiXG4gICAgICB9LFxuXG4gICAgICBpbml0aWFsaXplOiBmdW5jdGlvbihsaW5rKSB7XG4gICAgICAgIHZhciBwb3B1cCA9ICQoXCIuanNfX3BvcHVwXCIpO1xuICAgICAgICB2YXIgYm9keSA9ICQoXCIuanNfX3BfYm9keVwiKTtcbiAgICAgICAgdmFyIGNsb3NlID0gJChcIi5qc19fcF9jbG9zZVwiKTtcbiAgICAgICAgdmFyIHJvdXRlUG9wdXAgPSBzaW1wbGVQb3B1cC5zZXR0aW5ncy5oYXNodGFnICsgc2ltcGxlUG9wdXAuc2V0dGluZ3MudXJsO1xuXG4gICAgICAgIHZhciBjc3NDbGFzc2VzID0gbGlua1swXS5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKGNzc0NsYXNzZXMuaW5kZXhPZihcIiBcIikgPj0gMCkge1xuICAgICAgICAgIGNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgIGZvciAoa2V5IGluIGNzc0NsYXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChjc3NDbGFzc2VzW2tleV0uaW5kZXhPZihcImpzX19wX1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICBjc3NDbGFzc2VzID0gY3NzQ2xhc3Nlc1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lID0gY3NzQ2xhc3Nlcy5yZXBsYWNlKFwianNfX3BfXCIsIFwiXCIpO1xuXG4gICAgICAgIC8vIFdlIHJlZGVmaW5lIHRoZSB2YXJpYWJsZXMgaWYgdGhlcmUgaXMgYW4gYWRkaXRpb25hbCBwb3BhcFxuICAgICAgICBpZiAobmFtZSAhPT0gXCJzdGFydFwiKSB7XG4gICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShcIl9zdGFydFwiLCBcIl9wb3B1cFwiKTtcbiAgICAgICAgICBwb3B1cCA9ICQoXCIuanNfX1wiICsgbmFtZSk7XG4gICAgICAgICAgcm91dGVQb3B1cCA9IHNpbXBsZVBvcHVwLnNldHRpbmdzLmhhc2h0YWcgKyBuYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxpbmsub24oc2ltcGxlUG9wdXAuc2V0dGluZ3MuZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNpbXBsZVBvcHVwLnNob3cocG9wdXAsIGJvZHksIHJvdXRlUG9wdXApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzaW1wbGVQb3B1cC5oYXNoKHBvcHVwLCBib2R5LCByb3V0ZVBvcHVwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNpbXBsZVBvcHVwLmhpZGUocG9wdXAsIGJvZHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNpbXBsZVBvcHVwLmhpZGUocG9wdXAsIGJvZHkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgc2ltcGxlUG9wdXAuaGlkZShwb3B1cCwgYm9keSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cblxuICAgICAgY2VudGVyaW5nOiBmdW5jdGlvbihwb3B1cCkge1xuICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IC1wb3B1cC53aWR0aCgpLzI7XG4gICAgICAgIHJldHVybiBwb3B1cC5jc3MoXCJtYXJnaW4tbGVmdFwiLCBtYXJnaW5MZWZ0KTtcbiAgICAgIH0sXG5cbiAgICAgIHNob3c6IGZ1bmN0aW9uKHBvcHVwLCBib2R5LCByb3V0ZVBvcHVwKSB7XG4gICAgICAgIHNpbXBsZVBvcHVwLmNlbnRlcmluZyhwb3B1cCk7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2xhc3MoXCJqc19fZmFkZW91dFwiKTtcbiAgICAgICAgcG9wdXAucmVtb3ZlQ2xhc3MoXCJqc19fc2xpZGVfdG9wXCIpO1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gcm91dGVQb3B1cDtcbiAgICAgIH0sXG5cbiAgICAgIGhpZGU6IGZ1bmN0aW9uKHBvcHVwLCBib2R5KSB7XG4gICAgICAgIHBvcHVwLmFkZENsYXNzKFwianNfX3NsaWRlX3RvcFwiKTtcbiAgICAgICAgYm9keS5hZGRDbGFzcyhcImpzX19mYWRlb3V0XCIpO1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gc2ltcGxlUG9wdXAuc2V0dGluZ3MuaGFzaHRhZztcbiAgICAgIH0sXG5cbiAgICAgIGhhc2g6IGZ1bmN0aW9uKHBvcHVwLCBib2R5LCByb3V0ZVBvcHVwKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5oYXNoID09PSByb3V0ZVBvcHVwKSB7XG4gICAgICAgICAgc2ltcGxlUG9wdXAuc2hvdyhwb3B1cCwgYm9keSwgcm91dGVQb3B1cCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxpbmsgPSAkKHRoaXMpO1xuICAgICAgc2ltcGxlUG9wdXAuaW5pdGlhbGl6ZShsaW5rKTtcbiAgICB9KTtcbiAgfTtcbn0pKGpRdWVyeSk7Il19

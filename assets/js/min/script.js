$(function(){var e=0,o=0,a=$(".quiz-slider .quiz-question-wrap").length,t=$(".drop-answers-area ul").length;function s(a){$(".quiz-slider .quiz-question-wrap").hide(),$("#"+a).show(),e=a}function i(a){$(".drop-answers-area ul").hide(),$("#a-"+a).show(),o=a,console.log("Active",o)}console.log(t),$(".quiz-slider .quiz-question-wrap").hide(),s(1),i(1),$(".quiz-btn.next").click(function(){console.log("Clicked"),e<a&&s(e+1),o<t&&i(o+1)}),$(".quiz-btn.back").click(function(){1<e&&s(e-1),1<o&&s(o-1)})}),$(function(){$("#allFacets li .answer-box").draggable({"ui-floating":!0,item:".answer-box",revert:function(a,e){return $(this).data("uiDraggable").originalPosition={top:0,left:0},!a}}),$(window).scroll(function(a){var e=$(window).scrollTop();console.log(e)});var i=[],l=[];$(".answer-list.chosen li").droppable({activeClass:"ui-state-hover",hoverClass:"ui-state-active",item:".answer-box",drop:function(a,e){$(this).addClass("ui-state-highlight"),e.draggable.position({of:$(this),my:"left top",at:"left top"});var o=e.draggable.attr("data-value"),t=$(this).attr("data-id");console.log(t),$(this).addClass("dropped"),$(this).attr("data-value",o),e.draggable.addClass("dropped"),console.log("dataValue",o),$(".answer-list.chosen#a-1 .dropped").each(function(){i.push($(this).attr("data-value"))}),$(".answer-list.chosen#a-2 .dropped").each(function(){l.push($(this).attr("data-value"))});var s=i.length;console.log("Arr1",i),console.log("Arr2",l),console.log("First array count",s),$(this).has(".dropped-here").length&&$(this).droppable("disable")},accept:function(a){return!($(this).hasClass("dropped")&&!a.hasClass("dropped"))},out:function(a,e){$(this).removeClass("dropped"),e.draggable.removeClass("dropped")}})}),$(function(){$("#allFacets").clone().appendTo(".cloned-list")});
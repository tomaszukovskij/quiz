// Show next or prev quiz

$(function () {
    var active = 0;
    var active2 = 0;
    var n = $('.quiz-slider .quiz-question-wrap').length; // number of divs...
    var m = $('.drop-answers-area ul').length; // number of divs...
    console.log(m);

    $('.quiz-slider .quiz-question-wrap').hide();
    showElement(1);
    showElementW(1);
    $(".quiz-btn.next").click(function () {
        console.log("Clicked");
        if (active < n) showElement(active + 1);
        if (active2 < m) showElementW(active2 + 1);
    });
    $(".quiz-btn.back").click(function () {
        if (active > 1) showElement(active - 1);
        if (active2 > 1) showElement(active2 - 1);
    });

    function showElement(id) {
        $('.quiz-slider .quiz-question-wrap').hide();
        $('#' + id).show();
        active = id;
    }

    function showElementW(id) {
        $('.drop-answers-area ul').hide();
        $('#a-' + id).show();
        active2 = id;
        console.log("Active", active2);

    }
});

$(function () {
    $("#allFacets li .answer-box").draggable({
        'ui-floating': true,
        item: '.answer-box',
        // revert:  function(dropped) {
        //      var $draggable = $(this),
        //          hasBeenDroppedBefore = $draggable.data('hasBeenDropped'),
        //          wasJustDropped = dropped;
        //      if(wasJustDropped) {
        //          // don't revert, it's in the droppable
        //          return false;
        //      } else {
        //          if (hasBeenDroppedBefore) {
        //              // don't rely on the built in revert, do it yourself
        //              $draggable.animate({ top: 0, left: 0 }, 'slow');
        //              return false;
        //          } else {
        //              // just let the build in work, although really, you could animate to 0,0 here as well
        //              return true;
        //          }
        //      }
        // }

        // stop: function(event, ui)
        // {            
        //     var top = getTop(ui.helper);
        //     ui.helper.css('position', 'fixed');
        //     ui.helper.css('top', top+"px");
        // },

        // start: function (event, ui) {
        //     $(this).data("startingScrollTop",window.pageYOffset);
        //  },

        //  drag: function(event,ui){
        //     var st = parseInt($(this).data("startingScrollTop"));
        //     ui.position.top -= st;
        //  },
        // drag: function(event, ui) { 
        //     var offset = $(this).offset();
        //     var yPos = offset.top; 
        //     ui.helper.css('margin-top', $(window).scrollTop() + 'px');
        // },
    

        revert: function (event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top: 0,
                left: 0
            };
            return !event;
        }
    });

    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        console.log(sc);
    });

    function getTop(ele)
    {
        var eTop = ele.offset().top;
        var wTop = $(window).scrollTop();
        var top = eTop - wTop;
        
        return top;    
    }

    var attrValues1 = [];
    var attrValues2 = [];

    $(".answer-list.chosen li").droppable({
        activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        item: '.answer-box',

        drop: function (event, ui) {
            $(this).addClass('ui-state-highlight');
            ui.draggable.position({
                of: $(this),
                my: 'left top',
                at: 'left top'
            });

            var dataAtt = ui.draggable.attr("data-value");
            var dataId = $(this).attr("data-id");

            console.log(dataId);
            

            $(this).addClass('dropped');
            $(this).attr("data-value", dataAtt);
            ui.draggable.addClass('dropped');
            console.log("dataValue", dataAtt);


            // $(this).append($(ui.helper).clone());

            $(".answer-list.chosen#a-1 .dropped").each(function () {
                // attrValues1.push($(this).data('value'));
                attrValues1.push($(this).attr("data-value"));
            });
            $(".answer-list.chosen#a-2 .dropped").each(function () {
                // attrValues2.push($(this).data('value'));
                attrValues2.push($(this).attr("data-value"));
            });

            var arr1Count = attrValues1.length;

            var newArr =[];

            if(arr1Count===1) {
                newArr.push(attrValues1[0], "100%");
            } else if (arr1Count===2) {
                newArr.push([attrValues1[0], "80%"], attrValues1[1], "20%");
            }

            console.log("Arr1", attrValues1);
            console.log("Arr2", attrValues2);

            console.log("First array count", arr1Count);

            if ($(this).has('.dropped-here').length) {
                $(this).droppable('disable');
            }
        },

        accept: function (draggable) {
            if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')) {
                return true;
            }
            return false;
        },

        out: function (event, ui) {
            $(this).removeClass('dropped');
            ui.draggable.removeClass('dropped');
        }
    });
});

$(function () {
    $('#allFacets').clone().appendTo(".cloned-list");
});
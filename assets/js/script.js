// Show next or prev quiz

var dataResult1 = 0;
var dataResult2 = 0;
var dataResult3 = 0;

$(function() {
  $('.homepage-intro .controls .btn').on('click', function() {
    $('#page-container.home').fadeOut('fast');
    $('.white-overlay').fadeIn('fast');
    $('body').removeClass('ovh');
    setTimeout(function() {
      $('.white-overlay').fadeOut();
    }, 1000);
    setTimeout(function() {
      $('#page-container.questions').fadeIn('fast');
    }, 300);

  })
});

$(function() {
  $('.restart').on('click', function() {
    $('#page-container.questions').fadeOut('fast');
    $('.white-overlay').fadeIn('fast');
    $('body').addClass('ovh');

    setTimeout(function() {
      location.reload();
    }, 500);
  })
});

// Show hide text if its mobile
$(function() {
  if (Modernizr.touch) {
    $('.quiz-question--explanation span.mobile').css('display','inline-block');
    $('.quiz-question--explanation span.desktop').hide();
  } else {
    $('.quiz-question--explanation span.mobile').hide();
    $('.quiz-question--explanation span.desktop').css('display','inline-block');
  }
});

$(function() {
  var active = 0;
  var active2 = 0;
  var n = $('.quiz-slider .quiz-question-wrap').length; // number of divs...
  var m = $('.drop-answers-area .drop-area-wrap').length; // number of divs...

  if (Modernizr.touch) {

  } else {
    var setupPlugin = function() {
      var elem = $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
        {

          // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
          onScroll: function(percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
          }
        });
    }
  }

  // NEXT PREV Question controll

  $('.quiz-slider .quiz-question-wrap').hide();
  showElement(1);
  showElementW(1);
  $(".quiz-btn.next").click(function() {
    $('.white-overlay').fadeIn('fast');
    setTimeout(function() {
      $('.white-overlay').fadeOut();
    }, 1000);
    if (active < n) showElement(active + 1);
    if (active2 < m) showElementW(active2 + 1);
  });

  $(".quiz-btn.back").click(function() {
    if (active > 1) showElement(active - 1);
    if (active2 > 1) showElementW(active2 - 1);

    $('.white-overlay').fadeIn('fast');
    setTimeout(function() {
      $('.white-overlay').fadeOut();
    }, 1000);

    var questionId = $(".quiz-question-wrap").not(":hidden").prop("id");
  });

  function showElement(id) {
    setTimeout(function() {
      $('.quiz-slider .quiz-question-wrap').fadeOut().removeClass('show');
      $('#' + id).fadeIn('fast').addClass('show');
      active = id;
    }, 700);
    $(window).scrollTop(0);
    if (!Modernizr.touch) {
      setupPlugin();
    }
  }

  function showElementW(id) {
    $('.drop-answers-area .drop-area-wrap').fadeOut();
    $('#a-' + id).fadeIn();
    active2 = id;
  }
});

function checkIfAllFilled() {

  if ($("#a-1 ul li").length == $("#a-1 ul li.dropped").length) {
    $('#a-1 .quiz-btn.next').css({
      'pointer-events': 'all',
      'background': '#000'
    })
  } else {
    $('#a-1 .quiz-btn.next').css({
      'pointer-events': 'none',
      'background': 'transparent'
    })
  }

}

function checkIfAllFilled2() {
  if ($("#a-2 ul li").length == $("#a-2 ul li.dropped").length) {
    $('#a-2 .quiz-btn.next').css({
      'pointer-events': 'all',
      'background': '#000'
    })
  } else {
    $('#a-2 .quiz-btn.next').css({
      'pointer-events': 'none',
      'background': 'transparent'
    })
  }
}

function checkIfAllFilled3() {
  if ($("#a-3 ul li").length == $("#a-3 ul li.dropped").length) {
    $('#a-3 .quiz-btn.next').css({
      'pointer-events': 'all',
      'background': '#000'
    })
  } else {
    $('#a-3 .quiz-btn.next').css({
      'pointer-events': 'none',
      'background': 'transparent'
    })
  }
}

function checkIfAllFilled4() {
  if ($("#a-4 ul li").length == $("#a-4 ul li.dropped").length) {
    $('#a-4 .quiz-btn.next').css({
      'pointer-events': 'all',
      'background': '#000'
    })
  } else {
    $('#a-4 .quiz-btn.next').css({
      'pointer-events': 'none',
      'background': 'transparent'
    })
  }
}

function checkIfAllFilled5() {
  if ($("#a-5 ul li").length == $("#a-5 ul li.dropped").length) {
    $('#a-5 .quiz-btn.result-btn').css({
      'pointer-events': 'all',
      'background': '#000'
    })
  } else {
    $('#a-5 .quiz-btn.result-btn').css({
      'pointer-events': 'none',
      'background': 'transparent'
    })
  }
}

var moved = 0;
var answer_list_moved = 0;

function showMe(target, i) {
  $(window).on("scroll", function() {

    var currentScroll = $(this).scrollTop()
    var answer_list = (($('.show .answers-wrap').position().left) * -1);
    var answer_list_ok = answer_list - i;
    answer_list_moved = answer_list;

    if ($(target).hasClass('dropped')) {
      $(target).css("transform", "translate3d(" + answer_list_ok + "px,0, 0");
    }

  });
}




$(function() {

  var attrValues2 = [];

  var archetype1 = {
    title: 'Lover',
    data: []
  };
  var archetype2 = {
    title: 'Caregiver',
    data: []
  };
  var archetype3 = {
    title: 'Innocent',
    data: []
  };
  var archetype4 = {
    title: 'Rebel',
    data: []
  };
  var archetype5 = {
    title: 'Entertainer',
    data: []
  };
  var archetype6 = {
    title: 'Ruler',
    data: []
  };
  var archetype7 = {
    title: 'Sage',
    data: []
  };
  var archetype8 = {
    title: 'Magician',
    data: []
  };
  var archetype9 = {
    title: 'Everyman',
    data: []
  };
  var archetype10 = {
    title: 'Creator',
    data: []
  };
  var archetype11 = {
    title: 'Explorer',
    data: []
  };
  var archetype12 = {
    title: 'Hero',
    data: []
  };

  if (Modernizr.touch) {
    $('.quiz-question--explanation p').text('seelect');
    $( ".quiz-question-wrap#1 .answer-list .draggable .answer-box" ).each(function(index) {
        $(this).on("click", function(){
          var dataAtt = $(this).attr("data-value");
            if (!$('.drop-area-wrap#a-1 li:nth-child(1)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-1 li:nth-child(1)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled();
              // return false;
            } else if (!$('.drop-area-wrap#a-1 li:nth-child(2)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-1 li:nth-child(2)').addClass('dropped').attr("data-value", dataAtt);
                checkIfAllFilled();
                // return false;
            } else {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-1 li:nth-child(3)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled();
            }
          if ($('.drop-area-wrap#a-1 li.dropped').length === 3) {
            $('.quiz-question-wrap#1 .answer-list .draggable').css('pointer-events', 'none');
          }
        });
    });
    $( ".quiz-question-wrap#2 .answer-list .draggable .answer-box" ).each(function(index) {
        $(this).on("click", function(){
          console.log("Here");
          var dataAtt = $(this).attr("data-value");
            if (!$('.drop-area-wrap#a-2 li:nth-child(1)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-2 li:nth-child(1)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled2();
              // return false;
            } else if (!$('.drop-area-wrap#a-2 li:nth-child(2)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-2 li:nth-child(2)').addClass('dropped').attr("data-value", dataAtt);
                checkIfAllFilled2();
                // return false;
            } else {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-2 li:nth-child(3)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled2();
            }
            if ($('.drop-area-wrap#a-2 li.dropped').length === 3) {
              $('.quiz-question-wrap#2 .answer-list .draggable').css('pointer-events', 'none');
            }
        });
    });
    $( ".quiz-question-wrap#3 .answer-list .draggable .answer-box" ).each(function(index) {
        $(this).on("click", function(){
          console.log("Here");
          var dataAtt = $(this).attr("data-value");
            if (!$('.drop-area-wrap#a-3 li:nth-child(1)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-3 li:nth-child(1)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled3();
              // return false;
            } else if (!$('.drop-area-wrap#a-3 li:nth-child(2)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-3 li:nth-child(2)').addClass('dropped').attr("data-value", dataAtt);
                checkIfAllFilled3();
                // return false;
            } else {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-3 li:nth-child(3)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled3();
            }

            if ($('.drop-area-wrap#a-3 li.dropped').length === 3) {
              $('.quiz-question-wrap#3 .answer-list .draggable').css('pointer-events', 'none');
            }
        });
    });
    $( ".quiz-question-wrap#4 .answer-list .draggable .answer-box" ).each(function(index) {
        $(this).on("click", function(){
          console.log("Here");
          var dataAtt = $(this).attr("data-value");
            if (!$('.drop-area-wrap#a-4 li:nth-child(1)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-4 li:nth-child(1)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled4();
              // return false;
            } else if (!$('.drop-area-wrap#a-4 li:nth-child(2)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-4 li:nth-child(2)').addClass('dropped').attr("data-value", dataAtt);
                checkIfAllFilled4();
                // return false;
            } else {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-4 li:nth-child(3)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled4();
            }

            if ($('.drop-area-wrap#a-4 li.dropped').length === 3) {
              $('.quiz-question-wrap#4 .answer-list .draggable').css('pointer-events', 'none');
            }
        });
    });
    $( ".quiz-question-wrap#5 .answer-list .draggable .answer-box" ).each(function(index) {
        $(this).on("click", function(){
          console.log("Here");
          var dataAtt = $(this).attr("data-value");
            if (!$('.drop-area-wrap#a-5 li:nth-child(1)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-5 li:nth-child(1)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled5();
              // return false;
            } else if (!$('.drop-area-wrap#a-5 li:nth-child(2)').hasClass('dropped')) {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-5 li:nth-child(2)').addClass('dropped').attr("data-value", dataAtt);
                checkIfAllFilled5();
                // return false;
            } else {
              $(this).addClass('selected');
              $('.drop-area-wrap#a-5 li:nth-child(3)').addClass('dropped').attr("data-value", dataAtt);
              checkIfAllFilled5();
            }

            if ($('.drop-area-wrap#a-5 li.dropped').length === 3) {
              $('.quiz-question-wrap#5 .answer-list .draggable').css('pointer-events', 'none');
            }
        });
    });
    // Remove selected card from list
    $(".drop-area-wrap#a-1 .answer-list.chosen li" ).each(function(index) {
        $(this).on("click", function(){
          var attr = $(this).attr('data-value');
          if($(this).hasClass('dropped')) {
            $(this).removeClass('dropped');
            $(".quiz-question-wrap#1 .answer-list").find(`[data-value='${attr}']`).removeClass('selected');
            $('.quiz-question-wrap#1 .answer-list .draggable').css('pointer-events', 'auto');
            checkIfAllFilled();
          }

        });
    });
    $(".drop-area-wrap#a-2 .answer-list.chosen li" ).each(function(index) {
        $(this).on("click", function(){
          var attr = $(this).attr('data-value');
          if($(this).hasClass('dropped')) {
            $(this).removeClass('dropped');
            $(".quiz-question-wrap#2 .answer-list").find(`[data-value='${attr}']`).removeClass('selected');
            $('.quiz-question-wrap#2 .answer-list .draggable').css('pointer-events', 'auto');
            checkIfAllFilled2();
          }
        });
    });
    $(".drop-area-wrap#a-3 .answer-list.chosen li" ).each(function(index) {
        $(this).on("click", function(){
          var attr = $(this).attr('data-value');
          if($(this).hasClass('dropped')) {
            $(this).removeClass('dropped');
            $(".quiz-question-wrap#3 .answer-list").find(`[data-value='${attr}']`).removeClass('selected');
            $('.quiz-question-wrap#3 .answer-list .draggable').css('pointer-events', 'auto');
            checkIfAllFilled3();
          }
        });
    });
    $(".drop-area-wrap#a-4 .answer-list.chosen li" ).each(function(index) {
        $(this).on("click", function(){
          var attr = $(this).attr('data-value');
          if($(this).hasClass('dropped')) {
            $(this).removeClass('dropped');
            $(".quiz-question-wrap#4 .answer-list").find(`[data-value='${attr}']`).removeClass('selected');
            $('.quiz-question-wrap#4 .answer-list .draggable').css('pointer-events', 'auto');
            checkIfAllFilled4();
          }
        });
    });
    $(".drop-area-wrap#a-5 .answer-list.chosen li" ).each(function(index) {
        $(this).on("click", function(){
          var attr = $(this).attr('data-value');
          if($(this).hasClass('dropped')) {
            $(this).removeClass('dropped');
            $(".quiz-question-wrap#5 .answer-list").find(`[data-value='${attr}']`).removeClass('selected');
            $('.quiz-question-wrap#5 .answer-list .draggable').css('pointer-events', 'auto');
            checkIfAllFilled5();
          }
        });
    });
  } else {
    $('.quiz-question--explanation p').text('drag and drop');
    function getTop(ele) {
      var eTop = ele.offset().top;
      var wTop = $(window).scrollTop();
      var top = eTop - wTop;

      return top;
    }

    var windowStaticWidth = 0;
    // var elementPosition =  $('.answer-box.dropped').position().left;
    var myPosition = 0;

    $("#allFacets li .answer-box").draggable({
      'ui-floating': true,
      item: '.answer-box',

      revert: function(event, ui) {
        $(this).data("uiDraggable").originalPosition = {
          top: 0,
          left: 0,
        };
        $(this).css("transform", "translate3d(0px, 0px, 0px)");
        showMe(false);
        $('.remove-card').fadeOut();
        return !event;
      },
      // stop: function(e, ui) {
      //     var perc = ui.position.left / ui.helper.parent().width() * 100;
      //     ui.helper.css('left', perc + '%');
      // },
    });

    $(".answer-list.chosen li").droppable({
      activeClass: 'ui-state-hover',
      hoverClass: 'ui-state-active',
      item: '.answer-box',
      revert: true,

      drop: function(event, ui) {
        $(this).addClass('ui-state-highlight');
        ui.draggable.position({
          of: $(this),
          my: 'left top',
          at: 'left top'
        });

        var dataAtt = ui.draggable.attr("data-value");
        var dataId = $(this).attr("data-id");

        $(this).addClass('dropped');
        $(this).attr("data-value", dataAtt);
        ui.draggable.addClass('dropped');

        var answer_list_pos = ($('.show .answers-wrap').position().left) * -1;
        myPosition = $(ui.draggable).position().left;
        windowStaticWidth = $(window).width();

        showMe(ui.draggable, answer_list_pos);
        dragMe(ui.draggable, myPosition, windowStaticWidth, answer_list_pos);

        var currentScroll = $(this).scrollTop();

        checkIfAllFilled();
        checkIfAllFilled2();
        checkIfAllFilled3();
        checkIfAllFilled4();
        checkIfAllFilled5();
        $('.remove-card').fadeOut();
        return false;
      },

      accept: function(draggable) {
        if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')) {
          return true;
        } else if ($(this).hasClass('dropped ui-droppable-active')) {
          return true;
        }
        return false;
      },

      out: function(event, ui) {

        $(this).removeClass('dropped');
        ui.draggable.removeClass('dropped');

        checkIfAllFilled();
        checkIfAllFilled2();
        checkIfAllFilled3();
        checkIfAllFilled4();
        checkIfAllFilled5();
        $('.remove-card').fadeIn();
      }
    });

    function dragMe(element, i, pos, dragpos) {
      $(window).resize(function() {
        var windowWidth = $(window).width();
        var changedWidth = (pos - windowWidth) / 2;

        // Resize left position
        var newPosition = (i - changedWidth);

        //Scroll + resize transform
        var answer_list_pos_resize = answer_list_moved - ($('.show .answers-wrap').position().left) * -1;
        var diff = (answer_list_moved - answer_list_pos_resize) - dragpos;

        if ((element).hasClass('dropped')) {
          $(element).css({
            'left': newPosition + 'px',
            'transform': 'translate3d(' + diff + 'px,0, 0'
          });
        } else {
          return false;
        }

      });
    }
  }





  $('.quiz-btn.result-btn').on('click', function() {
    $('body').addClass('fullHeight');
    $('.quiz-questions-block').fadeOut('fast');
    $('.white-overlay').fadeIn('fast');
    setTimeout(function() {
      $('.white-overlay').fadeOut();

      if (Modernizr.touch) {
      } else {
        $('.contacts-btn').addClass('open');
      }
    }, 1000);
    setTimeout(function() {
      $('.result-container').fadeIn('fast');
    }, 300);

    var $lover = 'Lover';
    var $caregiver = 'Caregiver';
    var $innocent = 'Innocent';
    var $rebel = 'Rebel';
    var $entertainer = 'Entertainer';
    var $ruler = 'Ruler';
    var $sage = 'Sage';
    var $magician = 'Magician';
    var $everyman = 'Everyman';
    var $creator = 'Creator';
    var $explorer = 'Explorer';
    var $hero = 'Hero';

    $(".answer-list.chosen .dropped").each(function() {
      // attrValues1.push($(this).data('value'));
      if ($(this).attr("data-value") === $lover) {
        archetype1.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $caregiver) {
        archetype2.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $innocent) {
        archetype3.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $rebel) {
        archetype4.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $entertainer) {
        archetype5.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $ruler) {
        archetype6.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $sage) {
        archetype7.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $magician) {
        archetype8.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $everyman) {
        archetype9.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $creator) {
        archetype10.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $explorer) {
        archetype11.data.push($(this).attr("data-percent"));
      } else if ($(this).attr("data-value") === $hero) {
        archetype12.data.push($(this).attr("data-percent"));
      }
    });

    var total = 0;
    var total2 = 0;
    var total3 = 0;
    var total4 = 0;
    var total5 = 0;
    var total6 = 0;
    var total7 = 0;
    var total8 = 0;
    var total9 = 0;
    var total10 = 0;
    var total11 = 0;
    var total12 = 0;
    //
    //
    for (var i = 0; i < archetype1.data.length; i++) {
      total += archetype1.data[i] << 0;
    }

    for (var i = 0; i < archetype2.data.length; i++) {
      total2 += archetype2.data[i] << 0;
    }

    for (var i = 0; i < archetype3.data.length; i++) {
      total3 += archetype3.data[i] << 0;
    }

    for (var i = 0; i < archetype4.data.length; i++) {
      total4 += archetype4.data[i] << 0;
    }

    for (var i = 0; i < archetype5.data.length; i++) {
      total5 += archetype5.data[i] << 0;
    }

    for (var i = 0; i < archetype6.data.length; i++) {
      total6 += archetype6.data[i] << 0;
    }

    for (var i = 0; i < archetype7.data.length; i++) {
      total7 += archetype7.data[i] << 0;
    }

    for (var i = 0; i < archetype8.data.length; i++) {
      total8 += archetype8.data[i] << 0;
    }

    for (var i = 0; i < archetype9.data.length; i++) {
      total9 += archetype9.data[i] << 0;
    }

    for (var i = 0; i < archetype10.data.length; i++) {
      total10 += archetype10.data[i] << 0;
    }

    for (var i = 0; i < archetype11.data.length; i++) {
      total11 += archetype11.data[i] << 0;
    }

    for (var i = 0; i < archetype12.data.length; i++) {
      total12 += archetype12.data[i] << 0;
    }

    archetype1.data = (total / 5).toFixed(0);
    archetype2.data = (total2 / 5).toFixed(0);
    archetype3.data = (total3 / 5).toFixed(0);
    archetype4.data = (total4 / 5).toFixed(0);
    archetype5.data = (total5 / 5).toFixed(0);
    archetype6.data = (total6 / 5).toFixed(0);
    archetype7.data = (total7 / 5).toFixed(0);
    archetype8.data = (total8 / 5).toFixed(0);
    archetype9.data = (total9 / 5).toFixed(0);
    archetype10.data = (total10 / 5).toFixed(0);
    archetype11.data = (total11 / 5).toFixed(0);
    archetype12.data = (total12 / 5).toFixed(0);


    var arr = [archetype1, archetype2, archetype3, archetype4, archetype5, archetype6, archetype7, archetype8, archetype9, archetype10, archetype11, archetype12];


    function getTopN(arr, prop, n) {
      var clone = arr.slice(0);
      // sort descending
      clone.sort(function(x, y) {
        if (x[prop] == y[prop]) return 0;
        else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
        else return -1;
      });
      return clone.slice(0, n);
    }

    var n = 3;
    var topScorers = getTopN(arr, "data", n);
    var sum = 0;
    topScorers.forEach(function(item, index) {
      sum += parseInt(item.data);
    });

    var dataType = [];
    topScorers.forEach(function(item2, index2) {
      var first = ((item2.data / sum) * 100).toFixed(2);

      dataType.push({
        title: item2.title,
        data: first
      })
    });

    $('.archetype-is .h1').html(dataType[0].title);
    $('#result1 .title').html(dataType[0].title);
    $('#result1 .percentage').html(dataType[0].data + "%");


    var $loverText = 'Mirrors the need of intimacy.\nThe goal of archetype is to enjoy life passionately and promote relationship. Be a ectionate, intimate and charming.\nYou can describe lover as passionate and loving people. Lover is seeking to become more physically and emotionally attractive.\nThe brand which represents archetype best is "Victorias secret" and the person is Merilyn Monroe.';
    var $caregiverText = 'Mirrors the need of service.\nThe goal of archetype is to help and serve others. Be service-oriented, empathetic and giving.\nYou can describe caregiver as caring, helpful, patronising and advising. Caregiver is seeking to just do things for others.\nThe brand which represents archetype best is "Johnsons baby", “Volvo" and the person is Mother Teresa.';
    var $innocentText = 'Mirrors the need of safety.\nThe goal of archetype is to return to simple pleasures, to find and create hapiness. Be wholesome, utopian and optimistic.\nYou can describe innocent as loyal, dreamy, hopeful and optimistic. Innocent is seeking to do things right.\nThe brand which represents archetype best is “Dove", “Barbie" and the character is Cinderella.';
    var $rebelText = 'Mirrors the need of liberation.\nThe goal of archetype is to return to resist the status quo and escape average. Be risk-taking, raw and edgy.\nYou can describe rebel as initiating radical changes and able to shake.\nRebel is seeking to disrupt, destroy or shock.\nThe brand which represents archetype best is “Vice", “Harley-Davidson" and the person is Billy Idol.';
    var $entertainerText = 'Mirrors the need of enjoyment.\nThe goal of archetype is to enjoy the moment and lighten up the world. Be playful, humorous and witty.\nYou can describe entertainer as joyful, positive, enjoyful and free.\nEntertainer is seeking to play, make jokes and be funny.\nThe brand which represents archetype best is “Fanta", “Skittles" and the person is Jim Carrey.';
    var $rulerText = 'Mirrors the need of control.\nThe goal of archetype is to achieve success and influence. Be confident, powerful and authoritative.\nYou can describe ruler as responsible, controlling and commanding.\nRuler is seeking to exercise power.\nThe brand which represents archetype best is “Rolex", “Mercedes-Benz" and the person is Abraham Lincoln.';
    var $sageText = 'Mirrors the need of understanding.\nThe goal of archetype is to understand the world, to find and share the truth. Be truth-seeking, decisive and objective.\nYou can describe sage as wise, competent, expert and objective.\nSage is seeking out information and knowledge. Using self-reflection and understanding thought processes.\nThe brand which represents archetype best is “CNN", “Google" and the person is Bill Gates.';
    var $magicianText = 'Mirrors the need of belief.\nThe goal of archetype is to transform people’s lives and promote faith and wonder. Be transformative inspiring, visionary.\nYou can describe magician as charismatic, mystical and magical (obviously).\nMagician is seeking to develop a vision and live by it.\nThe brand which represents archetype best is “TED", “Disney" and the person is Steven Spielberg.';
    var $everymanText = 'Mirrors the need of belonging.\nThe goal of archetype is to build community, relate to others, belong and be accepted. Be friendly, down-to-earth and honest.\nYou can describe everyman as realistic, fitting for everyone, versatile and ordinary.\nEveryman is seeking to develop ordinary solid virtues, be down to earth with approach of common touch.\nThe brand which represents archetype best is “IKEA", “Ebay" and the person is Anne Hathaway.';
    var $creatorText = 'Mirrors the need of innovation.\nThe goal of archetype is to create something new and realise a vision. Be imaginative, innovative and expressive.\nYou can describe creator as innovating, creating and visionary.\nCreator is seeking to develop creative control and skill.\nThe brand which represents archetype best is “Lego", “Apple" and the person is Steve Jobs.';
    var $explorerText = 'Mirrors the need of freedom.\nThe goal of archetype is to learn about life through experience and create more freedom. Be open-minded, adventurous and independent.\nYou can describe explorer as independent, unconstrained, exploring and curious.\nExplorer is seeking for journey to experience new things, escape from boredom.\nThe brand which represents archetype best is “Red Bull", “Go Pro" and the person is Steve Irwin.';
    var $heroText = 'Mirrors the need of mastery.\nThe goal of archetype is to over-come all abstacles and motivate others to be better. Be courageous, determined and triumphant.\nYou can describe hero as brave, persistent and goal oriented.\nHero is seeking to be as strong and competent as possible.\nThe brand which represents archetype best is “Nike", “Duracell" and the caharcter is Batman.';

    if(dataType[0].title === $lover) {
      $('#result1 p').html($loverText);
    }
    else if (dataType[0].title === $caregiver) {
      $('#result1 p').html($caregiverText);
    }
    else if (dataType[0].title === $innocent) {
      $('#result1 p').html($innocentText);
    }
    else if (dataType[0].title === $rebel) {
      $('#result1 p').html($rebelText);
    }
    else if (dataType[0].title === $entertainer) {
      $('#result1 p').html($entertainerText);
    }
    else if (dataType[0].title === $ruler) {
      $('#result1 p').html($rulerText);
    }
    else if (dataType[0].title === $sage) {
      $('#result1 p').html($sageText);
    }
    else if (dataType[0].title === $magician) {
      $('#result1 p').html($magicianText);
    }
    else if (dataType[0].title === $everyman) {
      $('#result1 p').html($everymanText);
    }
    else if (dataType[0].title === $creator) {
      $('#result1 p').html($creatorText);
    }
    else if (dataType[0].title === $explorer) {
      $('#result1 p').html($explorerText);
    }
    else if (dataType[0].title === $hero) {
      $('#result1 p').html($heroText);
    }


    $('#result2 .title').html(dataType[1].title);
    $('#result2 .percentage').html(dataType[1].data + "%");

    if(dataType[1].title === $lover) {
      $('#result2 p').html($loverText);
    }
    else if (dataType[1].title === $caregiver) {
      $('#result2 p').html($caregiverText);
    }
    else if (dataType[1].title === $innocent) {
      $('#result2 p').html($innocentText);
    }
    else if (dataType[1].title === $rebel) {
      $('#result2 p').html($rebelText);
    }
    else if (dataType[1].title === $entertainer) {
      $('#result2 p').html($entertainerText);
    }
    else if (dataType[1].title === $ruler) {
      $('#result2 p').html($rulerText);
    }
    else if (dataType[1].title === $sage) {
      $('#result2 p').html($sageText);
    }
    else if (dataType[1].title === $magician) {
      $('#result2 p').html($magicianText);
    }
    else if (dataType[1].title === $everyman) {
      $('#result2 p').html($everymanText);
    }
    else if (dataType[1].title === $creator) {
      $('#result2 p').html($creatorText);
    }
    else if (dataType[1].title === $explorer) {
      $('#result2 p').html($explorerText);
    }
    else if (dataType[1].title === $hero) {
      $('#result2 p').html($heroText);
    }

    $('#result3 .title').html(dataType[2].title);
    $('#result3 .percentage').html(dataType[2].data + "%");

    if(dataType[2].title === $lover) {
      $('#result3 p').html($loverText);
    }
    else if (dataType[2].title === $caregiver) {
      $('#result3 p').html($caregiverText);
    }
    else if (dataType[2].title === $innocent) {
      $('#result3 p').html($innocentText);
    }
    else if (dataType[2].title === $rebel) {
      $('#result3 p').html($rebelText);
    }
    else if (dataType[2].title === $entertainer) {
      $('#result3 p').html($entertainerText);
    }
    else if (dataType[2].title === $ruler) {
      $('#result3 p').html($rulerText);
    }
    else if (dataType[2].title === $sage) {
      $('#result3 p').html($sageText);
    }
    else if (dataType[2].title === $magician) {
      $('#result3 p').html($magicianText);
    }
    else if (dataType[2].title === $everyman) {
      $('#result3 p').html($everymanText);
    }
    else if (dataType[2].title === $creator) {
      $('#result3 p').html($creatorText);
    }
    else if (dataType[2].title === $explorer) {
      $('#result3 p').html($explorerText);
    }
    else if (dataType[2].title === $hero) {
      $('#result3 p').html($heroText);
    }

    dataResult1 = dataType[0].data;
    dataResult2 = dataType[1].data;
    dataResult3 = dataType[2].data;


    var newData1 = [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 10
      },
      {
        x: 0,
        y: dataResult1
      },
      {
        x: 0,
        y: 10
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ];

    var newData2 = [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 5
      },
      {
        x: 0,
        y: dataResult2
      },
      {
        x: 0,
        y: 5
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ];

    var newData3 = [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 5
      },
      {
        x: 0,
        y: dataResult3
      },
      {
        x: 0,
        y: 5
      },
      {
        x: 0,
        y: 0
      }
    ];

    var data = myLine.data;

    var higherResult = parseInt(dataResult1) + 15;

    data.datasets[0].data = newData1;
    data.datasets[1].data = newData2;
    data.datasets[2].data = newData3;

    myLine.config.options.scales.yAxes[0].ticks.max = higherResult;
    myLine.config.options.scales.yAxes[1].ticks.max = higherResult;
    myLine.config.options.scales.yAxes[2].ticks.max = higherResult;

    setTimeout(function() {
      myLine.update();
    }, 1300);


  });

});


$(function() {
  $('#1 #allFacets').clone().appendTo("#1 .cloned-list");
  $('#2 #allFacets').clone().appendTo("#2 .cloned-list");
  $('#3 #allFacets').clone().appendTo("#3 .cloned-list");
  $('#4 #allFacets').clone().appendTo("#4 .cloned-list");
  $('#5 #allFacets').clone().appendTo("#5 .cloned-list");
});

$(function() {
  $('.contacts-btn').on('click', function() {
    $('.contact-us').addClass('show-me');
  });
});

$(function() {
  $('.contact-us .close').on('click', function() {
    $('.contact-us').removeClass('show-me')
  });
});


function getPDF() {

  var HTML_Width = $(".canvas_div_pdf").width();
  var HTML_Height = $(".canvas_div_pdf").height();
  var top_left_margin = 0;
  var PDF_Width = HTML_Width + (top_left_margin * 2);


  if ($(window).width() < 800) {
     var PDF_Height = (HTML_Height * 1.5) + (top_left_margin * 2);
  } else {
    var PDF_Height = PDF_Width + (top_left_margin * 2);
  }

  var canvas_image_width = PDF_Width;
  var canvas_image_height = PDF_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  if (Modernizr.touch) {
    $('.result-bottom-panel').removeClass('show-me');
    $('.contact-us').removeClass('show-me');
  }

  html2canvas($(".canvas_div_pdf")[0], {
    onclone: function (clonedDoc) {
        clonedDoc.getElementById('only-pdf').style.display = 'block';
    },
    width: canvas_image_width,
    height: canvas_image_height
  }).then(function(canvas) {
    canvas.getContext('2d');

    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
    pdf.addImage(imgData, 'JPG', top_left_margin, 0, canvas_image_width, canvas_image_height);

    //
    // for (var i = 1; i <= totalPDFPages; i++) {
    //   pdf.addPage(PDF_Width, PDF_Height);
    //   pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
    // }

    pdf.save("Your-brand-archetype-by-CRITICAL.pdf");
  });
};


window.chartColors = {
  red: 'rgb(255, 75, 45)',
  redish: 'rgb(255, 165, 150)',
  lowredish: 'rgb(255, 219, 213)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

var ctx = document.getElementById('canvas').getContext('2d');

var lineChartData = {
  labels: ['', '', '', '', '', '', '', ''],
  datasets: [{
    label: '',
    borderColor: window.chartColors.red,
    backgroundColor: window.chartColors.red,
    fill: false,
    borderWidth: 10,
    showLine: true,
    data: [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ],
    yAxisID: 'y-axis-1',
  }, {
    label: '	',
    borderColor: window.chartColors.redish,
    backgroundColor: window.chartColors.redish,
    fill: false,
    borderWidth: 10,
    showLine: true,
    data: [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ],
    yAxisID: 'y-axis-2'
  }, {
    label: '	',
    borderColor: window.chartColors.lowredish,
    backgroundColor: window.chartColors.lowredish,
    fill: false,
    borderWidth: 10,
    showLine: true,
    data: [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ],
    yAxisID: 'y-axis-3'
  }]
};


// extra option
if (Modernizr.touch) {
  var myLine = Chart.Line(ctx, {
    data: lineChartData,
    options: {
      responsive: true,
      hoverMode: 'index',
      stacked: false,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStartValue: 0,
      maintainAspectRatio: true,
      elements: {
        point: {
          radius: 0
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      title: {
        display: false,
        text: ''
      },

      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawOnChartArea: false,
            drawBorder: false,
          }
        }],
        yAxes: [{
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: 'left',
          scaleOverride: true,
          id: 'y-axis-1',
          scaleStepWidth: 30,
          ticks: {
            max: 61,
            min: 0
          },
          gridLines: {
            display: false
          },
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: 'right',
          scaleOverride: true,
          id: 'y-axis-2',
          ticks: {
            max: 61,
            min: 0
          },
          // grid line settings
          gridLines: {
            display: false,
            drawOnChartArea: false, // only want the grid lines for one axis to show up
            drawBorder: false,
          },
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: 'bottom',
          scaleOverride: true,
          id: 'y-axis-3',
          ticks: {
            max: 61,
            min: 0
          },
          // grid line settings
          gridLines: {
            display: false,
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }],
      }
    }
  });
} else {
  var myLine = Chart.Line(ctx, {
    data: lineChartData,
    options: {
      responsive: false,
      hoverMode: 'index',
      stacked: false,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStartValue: 0,
      maintainAspectRatio: true,
      elements: {
        point: {
          radius: 0
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      title: {
        display: false,
        text: ''
      },

      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: 'left',
          scaleOverride: true,
          id: 'y-axis-1',
          scaleStepWidth: 30,
          ticks: {
            max: 61,
            min: 0
          },
          gridLines: {
            display: false
          },
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: 'right',
          scaleOverride: true,
          id: 'y-axis-2',
          ticks: {
            max: 61,
            min: 0
          },
          // grid line settings
          gridLines: {
            display: false,
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }, {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: false,
          position: 'bottom',
          scaleOverride: true,
          id: 'y-axis-3',
          ticks: {
            max: 61,
            min: 0
          },
          // grid line settings
          gridLines: {
            display: false,
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }],
      }
    }
  });
}

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() < 1100) {
        if (Modernizr.touch) {

        } else {
          $('.resize-me').addClass('show-me')
        }
      } else {
        if (Modernizr.touch) {

        } else {
          $('.resize-me').removeClass('show-me')
        }
      }
});

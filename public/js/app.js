/**
 * Created by panew on 15-6-16.
 */
$(function () {



  // Floating-Fixed table of contents
  if ($('nav').length) {
    $('.toc-wrapper').pushpin({top: $('nav').height()});
  }
  else if ($('#index-banner').length) {
    $('.toc-wrapper').pushpin({top: $('#index-banner').height()});
  }
  else {
    $('.toc-wrapper').pushpin({top: 0});
  }
  function activeSidebar() {
    var pathname = window.location.pathname.substring(1);
    var pathList = $('aside li a');
    for (var i = 0, l = pathList.length; i < l; i++) {
      var tempa = pathList.eq(i);

      if (tempa.attr('href') === pathname) {
        tempa.parent().addClass('active');
        tempa.parents('.collapsible-body').show().parent().addClass('active').children('a').addClass('active');
      }
    }
  }

  activeSidebar();

  function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) {
      return rgb;
    }

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (rgb === null) {
      return "N/A";
    }

    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  $('.dynamic-color .col').each(function () {
    $(this).children().each(function () {
      var color = $(this).css('background-color'),
          classes = $(this).attr('class');
      $(this).html(rgb2hex(color) + " " + classes);
      if (classes.indexOf("darken") >= 0 || $(this).hasClass('black')) {
        $(this).css('color', 'rgba(255,255,255,.9');
      }
    });
  });

  var toggleContainersButton = $('#container-toggle-button');
  toggleContainersButton.click(function () {
    $('body .browser-window .container, .had-container').each(function () {
      $(this).toggleClass('had-container');
      $(this).toggleClass('container');
      if ($(this).hasClass('container')) {
        toggleContainersButton.text("不用Containers");
      }
      else {
        toggleContainersButton.text("用Containers");
      }
    });
  });


  // Toggle Flow Text
  var toggleFlowTextButton = $('#flow-toggle');
  toggleFlowTextButton.click(function () {
    $('#flow-text-demo').children('p').each(function () {
      $(this).toggleClass('flow-text');
    })
  });
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears : 15,// Creates a dropdown of 15 years to control year
    format      : 'yyyy-mm-dd '
  });
  $('.scrollspy').scrollSpy();
  $('select').not('.disabled').material_select();
  $('.slider').slider({full_width: true});
  $('.modal-trigger').leanModal();
  $('.parallax').parallax();

  $('#nav-button').on('click', function () {
    var $navMobile=$('#nav-mobile');
    var $body=$('body');
    $navMobile.addClass('in');
    $body.css('overflow','hidden');
    var overlay=$('<div id="sidenav-overlay" style="opacity: 1;" class=""></div>');
    overlay.on('click',function(){
      $navMobile.removeClass('in');
      overlay.remove();
      $body.css('overflow','auto');
    });
    $body.append(overlay);
  })

});


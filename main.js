//todo 

$(document).ready(function () {
  $('#snowmanhead').click(function () {
    if ($(this).hasClass('white')) {
      $(this).removeClass('white').addClass('black');
    } else {
      $(this).removeClass('black').addClass('white');
    }
  });

  $('#snowmanbody').click(function () {
    if ($(this).hasClass('white')) {
      $(this).removeClass('white').addClass('black');
    } else {
      $(this).removeClass('black').addClass('white');
    }
  });

  $("body").mousemove(function (event) {
    var leftPupil = $("#eye-left .pupil");
    var rightPupil = $("#eye-right .pupil");
    var leftPupilBase = leftPupil.offset();
    var rightPupilBase = rightPupil.offset();
    var leftDeltaX = event.pageX - leftPupilBase.left;
    var leftDeltaY = event.pageY - leftPupilBase.top;
    var rightDeltaX = event.pageX - rightPupilBase.left;
    var rightDeltaY = event.pageY - rightPupilBase.top;
    var leftAngle = Math.atan2(leftDeltaY, leftDeltaX);
    var rightAngle = Math.atan2(rightDeltaY, rightDeltaX);

    leftPupil.css("transform", "rotate(" + leftAngle + "rad)");
    rightPupil.css("transform", "rotate(" + rightAngle + "rad)");
  });

});
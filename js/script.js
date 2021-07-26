$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideToggle('2000').hide('2000');
    $("#development").show('2000');
  });
  $("#development").click(function () {
    $("#development").slideToggle('2000');
    $("#development-image").slideToggle('2000');
  });
});

$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideToggle('2000').hide('2000');
    $("#design").show('2000');
  });
  $("#design").click(function () {
    $("#design").slideToggle('2000');
    $("#design-image").slideToggle('2000');
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideToggle('2000').hide('2000');
    $("#product").show('2000');
  });
  $("#product").click(function () {
    $("#product").slideToggle('2000');
    $("#product-image").slideToggle('2000');
  });
});

$(document).ready(function () {
  $("#work1").mouseover(function () {
    $("#layout").show();
  }).mouseout(function () {
    $("#layout").hide();
  });
});
$(document).ready(function () {
  $("#work2").mouseover(function () {
    $("#layout2").show();
  }).mouseout(function () {
    $("#layout2").hide();
  });
});
$(document).ready(function () {
  $("#work3").mouseover(function () {
    $("#layout3").show();
  }).mouseout(function () {
    $("#layout3").hide();
  });
});
$(document).ready(function () {
  $("#work4").mouseover(function () {
    $("#layout4").show();
  }).mouseout(function () {
    $("#layout4").hide();
  });
});

$(document).ready(function () {
  $("#work5").mouseover(function () {
    $("#layout5").show();
  }).mouseout(function () {
    $("#layout5").hide();
  });
  $("#work6").mouseover(function () {
    $("#layout6").show();
  }).mouseout(function () {
    $("#layout6").hide();
  });
  $("#work7").mouseover(function () {
    $("#layout7").show();
  }).mouseout(function () {
    $("#layout7").hide();
  });
  $("#work8").mouseover(function () {
    $("#layout8").show();
  }).mouseout(function () {
    $("#layout8").hide();
  });
});

$(document).ready(function () {
  $("form#BAZU").submit(function (event) {

    var name = $("input#COMBINE1").val();

    var email = $("input#COMBINE0").val();

    var message = $("textarea#RADA").val();

    if (message == "") {
      alert("PLEASE TYPE YOUR MESSAGE")
    }

    if ($("input#COMBINE1").val() && $("input#COMBINE0").val()) {

      alert(name + " WE HAVE RECEIVED YOUR MESSAGE" + "  THANKYOU FOR REACHING OUT TO US");

    }
    else {
      alert("PLEASE ENTER BOTH YOUR NAME AND EMAIL!");
    }
  });

});

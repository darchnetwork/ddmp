$(document).ready(function() {

  // using jQuery
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  var csrftoken = getCookie('csrftoken');
  console.log(csrftoken);




  $("#encnow").click(function (){
    var encdata = $("#encdata").val();
    var requesterspkey = $("#requesterspkey").val();

    $("#resultenc").html("<i class='fa fa-spinner fa-spin'></i>  Please wait...");

    $.ajax({
      type:'POST',
      url:'/encpost/',
      data:{encdata: encdata, requesterspkey:requesterspkey, csrfmiddlewaretoken:csrftoken},
      success:function(msg){
        console.log(msg);
        if (msg["response"] == "ok") {
          $("#resultenc").html('<textarea id="encdata" name="encdata" rows="2" cols="50">'+ msg["info"] +'</textarea>');

        }
        else {
          $("#resultenc").text(msg["info"]);
        }
      },
    });
  });





    $("#decnow").click(function (){
      var privatekey = $("#privatekey").val();
      var decdata = $("#decdata").val();

      $("#resultdec").html("<i class='fa fa-spinner fa-spin'></i>  Please wait...");

      $.ajax({
        type:'POST',
        url:'/depost/',
        data:{privatekey: privatekey, decdata:decdata, csrfmiddlewaretoken:csrftoken},
        success:function(msg){
          console.log(msg);
          if (msg["response"] == "ok") {
            $("#resultdec").html('<textarea id="encdata" name="encdata" rows="2" cols="50">'+ msg["info"] +'</textarea>');

          }
          else {
            $("#resultdec").text(msg["info"]);
          }
        },
      });
    });











});

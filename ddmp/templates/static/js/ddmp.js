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





    $("#regmeinbro").click(function (){
      var email = $("#email").val();
      var username = $("#username").val();
      var password = $("#password").val();

      $("#resultreg").html("<i class='fa fa-spinner fa-spin'></i>  Please wait...");

      $.ajax({
        type:'POST',
        url:'/regmeinplease/',
        data:{email: email, username:username,password:password, csrfmiddlewaretoken:csrftoken},
        success:function(msg){
          console.log(msg);
          if (msg["response"] == "ok") {
            $("#resultreg").text('Registeristration successfully, now you can login.');
          }
          else {
            $("#resultreg").text(msg["info"]);
          }
        },
      });
    });


    $("#logmeinpleasebro").click(function (){
      var username = $("#username").val();
      var password = $("#password").val();


      $("#resultreg").html("<i class='fa fa-spinner fa-spin'></i>  Please wait...");

      $.ajax({
        type:'POST',
        url:'/checklogin/',
        data:{username:username,password:password, csrfmiddlewaretoken:csrftoken},
        success:function(msg){
          console.log(msg);
          if (msg["response"] == "ok") {
            window.location.href = "/";
          }
          else {
            $("#resultreg").text(msg["info"]);
          }
        },
      });
    });


  
    var icon = blockies.create({ // All options are optional
    seed: ethereumaddress, // seed used to generate icon data, default: random
    //color: '#dfe', // to manually specify the icon color, default: random
    //bgcolor: '#aaa', // choose a different background color, default: random
    size: 15, // width/height of the icon in blocks, default: 8
    scale: 3, // width/height of each block in pixels, default: 4
    //spotcolor: '#000' // each pixel has a 13% chance of being of a third color,
    // default: random. Set to -1 to disable it. These "spots" create structures
    // that look like eyes, mouths and noses.
  });
  console.log(icon);
   $('.blockimage').attr('src', icon.toDataURL());
   //$(".blockimage").append(icon);

//#document.body.appendChild(icon); // icon is a canvas element






});

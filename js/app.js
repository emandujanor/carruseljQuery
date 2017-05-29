
$(document).ready(function(){
  $('#boton1').click(function(){
    $(".image").hide();
    $("#img1").show();
  });
  $('#boton2').click(function(){
    $(".image").hide();
    $("#img2").show();
  });
  $('#boton3').click(function(){
    $(".image").hide();
    $("#img3").show();
  });
  $('#boton4').click(function(){
    $(".image").hide();
    $("#img4").show();
  });
  $('#boton5').click(function(){
    $(".image").hide();
    $("#img5").show();
  });

if ($("#img1").show()) {
  $('#anterior').click(function(){
    $(".image").hide();
    $("#img5").show();
  });
}
if ($("#img2").show()) {
  $('#anterior').click(function(){
    $(".image").hide();
    $("#img1").show();
  });
}
if ($("#img3").show()) {
  $('#anterior').click(function(){
    $(".image").hide();
    $("#img2").show();
  });
}
if ($("#img4").show()) {
  $('#anterior').click(function(){
    $(".image").hide();
    $("#img3").show();
  });
}
if ($("#img5").show()) {
  $('#anterior').click(function(){
    $(".image").hide();
    $("#img4").show();
  });
}




});

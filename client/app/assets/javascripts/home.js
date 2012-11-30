$(function(){
  $('#button').click(go);
});

function go() {
  var message = $('#msg').val();
  var to =  $('#to').val();
  var way = $('input:checked').val();

  $.ajax({
  type: "POST",
  url: "http://dcoates.fwd.wf/messages",
  data: { to_details: to, message: message, type: way }
    }).done(function( msg ) {
    alert(msg);

  });
}
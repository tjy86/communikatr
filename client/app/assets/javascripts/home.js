$(function(){
  $('#button').click(go);
});

function go() {
  var message = $('#msg').val();
  var to =  $('#to').val();
  var way = $('input:checked').val();

  $.ajax({
  type: "POST",
  url: "http://4eac.localtunnel.com/asdfasdfasdf",
  data: { receiver: to, message: message, method: way }
    }).done(function( msg ) {
    alert('complete');

  });
}
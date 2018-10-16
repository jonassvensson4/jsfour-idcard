$(document).ready(function(){
  // LUA listener
  window.addEventListener('message', function( event ) {
    if (event.data.action == 'open') {
      var type = event.data.type;
      var data = event.data.array[0];
      var sex  = data.sex;

      if ( sex.toLowerCase() == 'm' ) {
        $('img').attr('src', 'assets/images/male.png');
        $('#sex').text('male');
      } else {
        $('img').attr('src', 'assets/images/female.png');
        $('#sex').text('female');
      }

      $('#name').text(data.firstname + ' ' + data.lastname);
      $('#dob').text(data.dateofbirth);
      $('#height').text(data.height);
      $('#signature').text(data.firstname + ' ' + data.lastname);

      if ( type == 'driver' ) {
        $('#id-card').css('background', 'url(assets/images/driver.png)');
      } else {
        $('#id-card').css('background', 'url(assets/images/idcard.png)');
      }

      $('#id-card').show();
    } else if (event.data.action == 'close') {
      $('#id-card').hide();
    }
  });
});

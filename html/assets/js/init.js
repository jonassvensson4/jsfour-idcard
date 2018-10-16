$(document).ready(function(){
  // LUA listener
  window.addEventListener('message', function( event ) {
    if (event.data.action == 'open') {
      var type        = event.data.type;
      var userData    = event.data.array['user'][0];
      var licenseData = event.data.array['licenses'];
      var sex         = userData.sex;

      if ( licenseData != null ) {
        Object.keys(licenseData).forEach(function(key) {
          var type = licenseData[key].type;

          if ( type == 'drive_bike') {
            type = 'bike';
          } else if ( type == 'drive_truck' ) {
            type = 'truck';
          } else if ( type == 'drive' ) {
            type = 'car';
          }

          $('#licenses').append('<p>'+ type +'</p>');
        });
      }

      if ( sex.toLowerCase() == 'm' ) {
        $('img').attr('src', 'assets/images/male.png');
        $('#sex').text('male');
      } else {
        $('img').attr('src', 'assets/images/female.png');
        $('#sex').text('female');
      }

      $('#name').text(userData.firstname + ' ' + userData.lastname);
      $('#dob').text(userData.dateofbirth);
      $('#height').text(userData.height);
      $('#signature').text(userData.firstname + ' ' + userData.lastname);

      if ( type == 'driver' ) {
        $('#id-card').css('background', 'url(assets/images/license.png)');
      } else {
        $('#id-card').css('background', 'url(assets/images/idcard.png)');
      }

      $('#id-card').show();
    } else if (event.data.action == 'close') {
      $('#id-card').hide();
      $('#licenses').html('');
    }
  });
});

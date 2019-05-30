$(document).ready(function(){

    $('.form').find('input').on('keyup blur focus', function (e) {
  
        var $this = $(this),
            label = $this.prev('label');
      
            if (e.type === 'keyup') {
                  if ($this.val() === '') {
                label.removeClass('active highlight');
              } else {
                label.addClass('active highlight');
              }
          } else if (e.type === 'blur') {
              if( $this.val() === '' ) {
                  label.removeClass('active highlight'); 
                  } else {
                  label.removeClass('highlight');   
                  }   
          } else if (e.type === 'focus') {
            
            if( $this.val() === '' ) {
                  label.removeClass('highlight'); 
                  } 
            else if( $this.val() !== '' ) {
                  label.addClass('highlight');
                  }
          }
      
      });
      
      $('.tab a').on('click', function (e) {
        
        e.preventDefault();
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
      
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
        
      });

      $('form').submit(function(e){

        e.preventDefault();
        let formData = {
            "first_name"  : $('input[name=first_name]').val(),
            "last_name"   : $('input[name=last_name]').val(),
            "email"       : $('input[name=email]').val(),
            "password"    : $('input[name=password]').val()
        };

        $.ajax({
            type         :  'POST',
            url          :  'http://localhost:3000/users',
            contentType  :   "application/json",
            data         :   formData,
            dataType     :   'json',
            encode       :   true
        })
        .done(function(data){
            console.log(data);
        });

      });
});
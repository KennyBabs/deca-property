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
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
      
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);

        e.preventDefault();
        
      });
     

      $('.signup').submit(function(e){
        e.preventDefault();
        
            let first_name = $('input[name=first_name]').val();
            let last_name  = $('input[name=last_name]').val();
            let email      = $('input[name=email]').val();
            let password   = $('input[name=password]').val();

            let formData = JSON.stringify({first_name, last_name, email, password});
        

        if (!first_name.match(/^[A-Z]+$/i)) {

            Swal.fire({
              type: "error",
              title: "Oops...",
              text: "First name should be alphabets only"
            });

          } else if (!last_name.match(/^[A-Z]+$/i)) {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: "Last name should be alphabets only"
            });

          }else {
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
      
    }
})

// User login

$('.login').submit(function(e){
    e.preventDefault();
    let email = $('input[name=emal]').val();
    let password = $('input[name=passwrd]').val();

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/users',
        dataType: "json"
    }).done(function(data){
        let user = data.find(
            user => user.email === email && user.password === password);
            if(user){
                alert("Welcome back!");
                window.location.replace("dashboard.html");

            }else{
                alert("You have to sign-up")
            }
    })
    })

})
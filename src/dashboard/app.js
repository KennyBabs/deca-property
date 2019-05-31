$(document).ready(function(){
  $('.post-p').click(postAproperty);
  $('.add-prop').click(function(){
    $('.frm-content').show();
    $('section').hide();
    $('.view-prop').hide();
});

  function viewAllProperties(){
  
    $.ajax({

      type    :  'GET',
      url     :   'http://localhost:3000/property',
      success :   function(data){

        $(".view-prop").empty();
        for(var i = 0; i < data.length; i++){
          console.log("data",data);
          $(".view-prop").append("<div class='card'><img src="+data[i].photos +" alt='property image' class='image'><div class='container'><h4><b>"+data[i].type+"</b></h4><p>Location: "+data[i].address+"</p><p>"+data[i].description+"</p><p>Price: "+data[i].price+"</p><button id="+data[i].id+" class='deletePost'>Delete</button><button id="+data[i].id+" class='getOneProp'>Details</button>");
          $(".view-prop").append("");
          $(".view-prop").append("");
          $("section").hide();
          $(".frm-content").hide();
        }
      },
        error:function(){
          console.log("error");
        }
    });
  }
  

    
})

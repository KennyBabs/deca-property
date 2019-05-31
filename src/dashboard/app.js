$(document).ready(function(){
  $(".view-prop-btn").click(viewAllProperties);
  $('.post-p').click(postAproperty);
  $(".view-prop").on("click",".deletePost",null,function(){
    var id = $(this).attr("id");
    deleteProperty(id);
});
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

  // Post A Property
  function postAproperty(){
         
    let type        = $('select.type-prop').children('option:selected').val();
    let address     = $('input[name=address]').val();
    let photos      = $('input[name=photos]').val();
    let price       = $('select.price-range').children('option:selected').val();
    let description = $('textarea#message').val();

let formData = JSON.stringify({type, address,photos,price,description});

 $.ajax({
     type : 'POST',
     url  : "http://localhost:3000/property",
     data :  formData,
     dataType: 'json',
     contentType: 'application/json',
     success : function(data){
         $('.view-prop').show();
         viewOneProperty(data.id);
         console.log("Post Successfully");
     },
     error:function(){
         console.log("error");
     }
 })
}  
//  Delete A Property
function deleteProperty(id){
  console.log("id",id);
  $.ajax(
    {
       type:'DELETE',
       url: 'http://localhost:3000/property/'+id,
       success:function(data){
         viewAllProperties();
         alert("Deleted succesfully");
       },
       error:function(){
          console.log("error");
       }
    }
  );
}

})

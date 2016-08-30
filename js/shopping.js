$(document).ready(function () {

   var check= '<span class=""> </span>';
   var X = '<span class="Xclass"></span>'
    
    $('#buttonpress').click(function () {
        if( $('.mdl-textfield__input').val().trim().length ==0){
            
            alert("Please add something to the List");
        }
            
            
            else{
            
            $('.list').append('<li>'+ $('.mdl-textfield__input').val() + X + '</li>');
                $('.mdl-textfield__input').val("");
            

                              };
        
    });
    
    
   
    
});


 $(function() {
$('ul.list').on( "click", 'li',function () {
        
       
        $(this).toggleClass("listyle");
     //$(this).closest('li').addClass('listyle');
		//$(this).remove();
    //$('listyle').remove();
        });
     });



$(document).keypress(function(e) {
    if(e.which == 13 ) {
        
         // $('.list').append('<li>'+ $('.mdl-textfield__input').val() + X + '</li>');
                //$('.mdl-textfield__input').val("");
            
            $('#buttonpress').click();
            
    };
            
            
        
        
        
        
        
    
});



$(document).on("click", ".Xclass", function(){
    $(this).closest('li').fadeOut(300);
});



$(document).on("click", ".btn", function(){
    $(".list").empty();
    
});
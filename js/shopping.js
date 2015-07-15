$(document).ready(function () {

    $('.button').click(function () {
        $('.list').append($('<li>', {
            text: $('.mdl-textfield__input').val()

        }));
        
        
    });
    
    
   
    
});


 $(function() {
$('ul.list').on( "click", 'li',function () {
        
        //$('ul.list li').css({color:'red'});
       // alert('pieeeee');
        //$('ul.list li').addClass("listyle");
        $(this).closest('ul.list li').addClass("listyle");
     //$(this).closest('li').addClass('listyle');
		//$(this).remove();
        });
     });
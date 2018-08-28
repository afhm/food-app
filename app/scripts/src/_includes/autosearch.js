$(document).ready(function(){  
	$('#location').keyup(function(){  
		 var query = $(this).val();  
		 if(query != '')  
		 {  
			  $.ajax({  
				   url:"../locationsearch.php",  
				   method:"POST",  
				   data:{query:query},  
				   success:function(data)  
				   {  
						$('#locationList').fadeIn();  
						$('#locationList').html(data);  
				   }  
			  });  
		 }  
	});  
	$(document).on('click', 'li', function(){  
		 $('#location').val($(this).text());  
		 $('#locationList').fadeOut();  
	});  
}); 
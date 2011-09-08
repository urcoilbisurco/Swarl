$(document).ready(function(){
	var end=false,
		set=false,
		search,
		oldValue="";
	setInterval(function() {
		if(set){
			if(end){
				search=$("#search").val();
				if(search!=oldValue){
					
					$("#images").fadeOut();
				  	$.post('http://http://swarl.herokuapp.com', { search: search}, function(result) {
						$("#searchBar").animate({
							paddingTop : "0"
						},350);
						$('#images').html(result).fadeIn();

					});
					end=false;
					set=false;
					oldValue=search;
				}
			} else{
				end=true;
			}
		}
	}, 150);
	
	$("#search").keyup(function() {
		end=false;
		set=true;	
	});

	
});


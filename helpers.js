Instagram = require('instagram-node-lib');

Instagram.set('client_id', 'fb0d1a152fa44cf4865b07721be4b940');
Instagram.set('client_secret', '457e11a6f47c4631bb41a2b5c4152fb2');



function getTag(tag , res, callback){
    Instagram.tags.recent({ name: tag, count:30,
	  	complete:function(data, pagination){
			(data.length != 0) ? callback(data) : error(res, "I didn't find any pics! Try search another word! ")
		},
		error: function(errorMessage, errorObject, caller){
		      // errorMessage is the raised error message
		      // errorObject is either the object that caused the issue, or the nearest neighbor
		      // caller is the method in which the error occurred
			error(res , ((tag.length==0) ? "Search something (like: red, sun, clouds...)" : "I can't search this word, sorry."));
			
		}
	});
}
function error(res, message){
	res.render(
		"partials/error.ejs",
		{
			layout:false,
			message: message
		}
	);
}

exports.getTag = getTag;
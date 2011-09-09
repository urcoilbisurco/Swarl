
var config = require('./config.js');
var helpers = require('./helpers.js');
var app = config.app;
// Routes

app.get('/', function(req, res){
	/*helpers.getTag("blue", res, function(data){
			res.render(
				'index',
				{
		    		title: 'Swarl',
					data: data
		  		}
			);
	});*/
	res.render('index', {title:'Swarl', data:""});
	
  	
});
app.post('/', function(req, res){
	if (req.xhr){
	helpers.getTag(req.body.search, res, function(data){
			res.render(
				"partials/handle_image.ejs",
				{
					layout: false,
					data: data
				}
			);
		});
	} else{
		res.redirect('/');
	}
});

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

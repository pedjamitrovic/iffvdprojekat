class LoginPopupFeed extends PopupFeed
{
	constructor(callback)
	{
		super();
		this.callback = callback;
	}
	Header()
	{
		return "" +
			"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">&times;</button>" +
			"<h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-log-in\"></span>&emsp;Log in</h4>";
	}
	Body()
	{
		return "" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>" +
				"<input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"login-username\" placeholder=\"Username\">" +
			"</div>" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>" +
				"<input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"login-password\" placeholder=\"Password\">" +
			"</div>";
	}
	Footer()
	{
		return "" +
			"<div class=\"row\">" +
				"<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-4\">" +
					"<button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" onclick=\"" + this.callback + "('" + this.popups[this.current].id + "', $('#" + this.popups[this.current].id + " #login-username')[0].value, $('#" + this.popups[this.current].id + " #login-password')[0].value);\">Log in</button>" +
				"</div>" +
				"<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-4\"></div>" +
				"<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-4\">" +
					"<button type=\"button\" class=\"btn btn-danger btn-sm btn-block\" data-dismiss=\"modal\" aria-label=\"close\">Close</button>" +
				"</div>" +
			"</div>";
	}
	Info()
	{
		return "";
	}
}

class RegisterPopupFeed extends PopupFeed
{
	constructor(callback)
	{
		super();
		this.callback = callback;
	}
	Header()
	{
		return "" +
			"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"close\">&times;</button>" +
			"<h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-check\"></span>&emsp;Register</h4>";
	}
	Body()
	{
		return "" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></span>" +
				"<input id=\"register-firstname\" type=\"text\" class=\"form-control\" name=\"register-firstname\" placeholder=\"First name\">" +
			"</div>" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-bold\"></i></span>" +
				"<input id=\"register-lastname\" type=\"text\" class=\"form-control\" name=\"register-lastname\" placeholder=\"Last name\">" +
			"</div>" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>" +
				"<input id=\"register-username\" type=\"text\" class=\"form-control\" name=\"register-username\" placeholder=\"Username\">" +
			"</div>" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>" +
				"<input id=\"register-password\" type=\"password\" class=\"form-control\" name=\"register-password\" placeholder=\"Password\">" +
			"</div>" +
			"<div class=\"input-group\">" +
				"<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>" +
				"<input id=\"register-email\" type=\"email\" class=\"form-control\" name=\"register-email\" placeholder=\"E-mail\">" +
			"</div>";
	}
	Footer()
	{
		return "" +
			"<div class=\"row\">" +
				"<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-4\">" +
					"<button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" onclick=\"" + this.callback + "('" + this.popups[this.current].id + "', $('#" + this.popups[this.current].id + " #register-firstname')[0].value, $('#" + this.popups[this.current].id + " #register-lastname')[0].value, $('#" + this.popups[this.current].id + " #register-username')[0].value, $('#" + this.popups[this.current].id + " #register-password')[0].value, $('#" + this.popups[this.current].id + " #register-email')[0].value);\">Sign up</button>" +
				"</div>" +
				"<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-4\"></div>" +
				"<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-4\">" +
					"<button type=\"button\" class=\"btn btn-danger btn-sm btn-block\" data-dismiss=\"modal\" aria-label=\"close\">Close</button>" +
				"</div>" +
			"</div>";
	}
	Info()
	{
		return "";
	}
}

class AlertPopupFeed extends PopupFeed
{
	constructor(initialContent)
	{
		super();
		this.content = initialContent;
	}
	Body()
	{
		return this.content;
	}
}

class View
{
	AsView()
	{
		return "";
	}
	
	AsPartialView()
	{
		return "";
	}
}

var mainPopup;
var alertPopup;

var loginPopupFeed;
var registerPopupFeed;
var alertPopupFeed;

doc.ready(function()
{
	mainPopup = new Popup(Config.mainPopupId);
	alertPopup = new AlertPopup(Config.alertPopupId);
	
	loginPopupFeed = new LoginPopupFeed("login");
	loginPopupFeed.Subscribe(mainPopup);
	
	registerPopupFeed = new RegisterPopupFeed("register");
	registerPopupFeed.Subscribe(mainPopup);
	
	alertPopupFeed = new AlertPopupFeed(Alert.New("success", "<b>Success!</b> The job is done.", true, "modal"));
	alertPopupFeed.Subscribe(alertPopup);
});

class MovieView extends View
{
	constructor
	(
		country,
		title,
		director,
		roles,
		genre,
		description,
		date,
		length,
		direction,
		rating,
		festivals,
		montage,
		music,
		producer,
		production,
		distributer
	)
	{
		super();
		this.country = country;
		this.title = title;
		this.director = director;
		this.roles = roles;
		this.genre = genre;
		this.description = description;
		this.date = date;
		this.length = length;
		this.direction = direction;
		this.rating = rating;
		this.festivals = festivals;
		this.montage = montage;
		this.music = music;
		this.producer = producer;
		this.production = production;
		this.distributer = distributer;
	}
	
	static FromJSON(text) { var json = JSON.parse(text); return new MovieView (json.country, json.title, json.director, json.roles, json.genre, json.description, json.date, json.length, json.direction, json.rating, json.festivals, json.montage, json.music, json.producer, json.production, json.distributer); }
	ToJSON() { return JSON.stringify(this); }
	
	AsView()
	{
		var stars = "";
		var i = 0;
		
		for (; i < this.rating; i++)
			stars += "<i class=\"glyphicon glyphicon-star\"></i>";
		
		for (; i < 5; i++)
			stars += "<i class=\"glyphicon glyphicon-star-empty\"></i>";
		
		return "" +
			"<h3>" + this.country + "</h3>" +
			"<h1>" + this.title + "</h1>" +
			"<h2>" + this.director + "</h2>" +
			"<p>Režija: " + this.producer + "</p>" +
			"<p>Uloge: " + this.roles + "</p>" +
			"<div>" +
				stars +
			"</div>" +
			"<video width=\"640\" height=\"360\" controls class=\"margin-top-md margin-bottom-md\">" +
				"<source src=\"storage/movies/" + this.title + "/movie.mp4\" type=\"video/mp4\">" +
				"<source src=\"storage/movies/" + this.title + "/movie.ogg\" type=\"video/ogg\">" +
				"Your browser does not support the video tag." +
			"</video>" +
			"<p class=\"solid-border-left border-left-md text-justify margin-sm padding-sm\"><b><i>" +
				this.description +
			"</i></b></p>" +
			"<div class=\"border-boxed expanded\">" +
				"<img src=\"storage/movies/" + this.title + "/cover.jpg\" width=\"320\" height=\"475\" style=\"float: left; padding-bottom: 40px;\"/>" +
				"<div style=\"padding-left: 350px;\">" +
					"<table class=\"table table-striped\" style=\"max-width: 80%\">" +
						"<thead>" +
							"<tr>" +
								"<th scope=\"col\" class=\"text-right\">Detalj:</th>" +
								"<th scope=\"col\" class=\"text-left\">Vrednost</th>" +
							"</tr>" +
						"</thead>" +
						"<tbody>" +
							"<tr>" +
								"<td class=\"text-right\">Žanr:</td>" +
								"<td class=\"text-left\">" + this.genre + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Datum:</td>" +
								"<td class=\"text-left\">" + this.date + "'</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Dužina:</td>" +
								"<td class=\"text-left\">" + this.length + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Direkcija:</td>" +
								"<td class=\"text-left\">" + this.direction + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Festivali:</td>" +
								"<td class=\"text-left\">" + this.festivals + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Montaža:</td>" +
								"<td class=\"text-left\">" + this.montage + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Muzika:</td>" +
								"<td class=\"text-left\">" + this.music + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Produkcija:</td>" +
								"<td class=\"text-left\">" + this.production + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class=\"text-right\">Distributer:</td>" +
								"<td class=\"text-left\">" + this.distributer + "</td>" +
							"</tr>" +
						"</tbody>" +
					"</table>" +
				"</div>" +
			"</div>";
	}
	
	AsPartialView()
	{
		return "" +
				"<div class=\"border-boxed expanded margin-lg\">" +
					"<img src=\"storage/movies/" + this.title + "/cover.jpg\" width=\"320\" height=\"475\" style=\"float: left;\"/>" +
					"<div style=\"padding-left: 350px;\">" +
						"<h3 class=\"font-md font-times-new-roman\"><b>" + this.title + "</b></h3>" +
						"<h4 class=\"font-md font-times-new-roman\">" + this.director + "</h4>" +
						"<table class=\"table table-striped margin-lg margin-top-sm\" style=\"max-width: 80%;\">" +
							"<thead>" +
								"<tr>" +
									"<th scope=\"col\" class=\"text-right\">Detalj:</th>" +
									"<th scope=\"col\" class=\"text-left\">Vrednost</th>" +
								"</tr>" +
							"</thead>" +
							"<tbody>" +
								"<tr>" +
									"<td class=\"text-right\">Država:</td>" +
									"<td class=\"text-left\">" + this.country + "</td>" +
								"</tr>" +
								"<tr>" +
									"<td class=\"text-right\">Trajanje:</td>" +
									"<td class=\"text-left\">" + this.length + "'</td>" +
								"</tr>" +
								"<tr>" +
									"<td class=\"text-right\">Žanr:</td>" +
									"<td class=\"text-left\">" + this.genre + "</td>" +
								"</tr>" +
								"<tr>" +
									"<td class=\"text-right\">Rejting:</td>" +
									"<td class=\"text-left\">" + this.rating + "</td>" +
								"</tr>" +
								"<tr>" +
									"<td class=\"text-right\">Uloge:</td>" +
									"<td class=\"text-left\">" + this.roles + "</td>" +
								"</tr>" +
								"<tr>" +
									"<td class=\"text-right\">Datum izvođenja:</td>" +
									"<td class=\"text-left\">" + this.date + "</td>" +
								"</tr>" +
							"</tbody>" +
						"</table>" +
						"<div>" +
							"&emsp;&emsp;&emsp;&emsp;<button type=\"button\" class=\"btn btn-danger btn-lg super-edged\" onclick=\"window.location.replace('film.html?movie=" + encodeURIComponent(this.ToJSON()) + "');\">Opširnije</button>" +
							"&emsp;&emsp;&emsp;&emsp;<button type=\"button\" class=\"btn btn-default btn-lg super-edged\"><i class=\"glyphicon glyphicon-heart\"></i> Omiljeni</button>" +
						"</div>" +
					"</div>" +
				"</div>";
	}
}

var movies = [];
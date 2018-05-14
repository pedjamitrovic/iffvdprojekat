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
		trailer,
		description,
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
		this.trailer = trailer;
		this.description = description;
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
	
	AsView()
	{
		return super.AsView();
	}
	
	AsPartialView()
	{
		return "" +
				"<div class=\"border-boxed expanded margin-lg\">" +
					"<img src=\"storage/movies/" + this.title + "/cover.jpg\" width=\"320\" height=\"475\" style=\"float: left;\"/>" +
					"<div style=\"padding-left: 350px;\">" +
						"<h3 class=\"font-lg\">" + this.title + "</h3>" +
						"<h4 class=\"font-md\">" + this.director + "</h4>" +
						"<table class=\"table table-striped margin-lg\">" +
							"<thead>" +
								"<tr>" +
									"<th scope=\"col\">Detalj</th>" +
									"<th scope=\"col\">Vrednost</th>" +
								"</tr>" +
							"</thead>" +
							"<tbody>" +
								"<tr>" +
									"<td class=\"text-right\">Država:</td>" +
									"<td class=\"text-left\">" + this.country + "</td>" +
								"</tr>" +
								"<tr>" +
									"<td class=\"text-right\">Trajanje:</td>" +
									"<td class=\"text-left\">" + this.length + "</td>" +
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
							"</tbody>" +
						"</table>" +
						"<div>" +
							"&emsp;&emsp;&emsp;&emsp;<button type=\"button\" class=\"btn btn-default btn-lg super-edged\">Opširnije</button>" +
							"&emsp;&emsp;&emsp;&emsp;<button type=\"button\" class=\"btn btn-default btn-lg super-edged\"><i class=\"glyphicon glyphicon-heart\"></i> Omiljeni</button>" +
						"</div>" +
					"</div>" +
				"</div>";
	}
}

var movies = [];
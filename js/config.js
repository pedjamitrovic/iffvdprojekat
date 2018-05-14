class Config { constructor() { throw new Error("Static class"); } };

// ================== CONFIG START ==================

Config.mainPopupId = "popup";
Config.alertPopupId = "alert-popup";

// =================== CONFIG END ===================

var win = $(window), doc = $(document);
var body, wrapper, fixedHeader, header, navbar, content, footer;

$(document).ready(function()
{
	body = $(document.body);
	fixedHeader = $("body > div#wrapper > div#top-content-fixed > header#header-fixed");
	wrapper = $("body > div#wrapper");
	header = $("body > div#wrapper > header#header-main");
	navbar = $("body > div#wrapper > nav#navbar-main");
	content = $("body > div#wrapper > div#content");
	footer = $("body > div#wrapper > footer#footer-main");
	
	fixedHeader.load("templates/header-fixed.html");
	header.load("templates/header-main.html");
	navbar.load("templates/navbar.html");
	footer.load("templates/footer.html");
});
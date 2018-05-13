class Config { constructor() { throw new Error("Static class"); } };
Config.mainPopupId = "popup";
Config.alertPopupId = "alert-popup";

$(document).ready(function()
{
	fixedHeader.load("templates/header-fixed.html");
	header.load("templates/header-main.html");
	navbar.load("templates/navbar.html");
	footer.load("templates/footer.html");
});
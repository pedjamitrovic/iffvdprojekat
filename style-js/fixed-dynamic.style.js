doc.ready(function()
{
	//win.on("resize", onWindowResize);
	win.on("scroll", onWindowScroll);
	
	//onWindowResize();
	onWindowScroll();
});

function onWindowResize(e)
{
	if (!win.hasScrollBar())
		content[0].style.height = (goip(wrapper[0], "height") - (goip(header[0], "height") + goip(navbar[0], "height") + goip(footer[0], "height"))) + "px";
}

function onWindowScroll(e)
{
	if (win.scrollTop() > getObjectIntProperty(header[0], "height") + getObjectIntProperty(navbar[0], "height"))
	{
		if (!fixedHeader.hasClass("on-top")) fixedHeader.addClass("on-top");
	}
	else if (fixedHeader.hasClass("on-top")) fixedHeader.removeClass("on-top");
}
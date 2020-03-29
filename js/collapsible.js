$(document).ready(function() {
	$(".collapsible-content").hide();
	var openThis;
	$(".collapsible").click(function() {
		var openThis = ($(this).next(".collapsible-content:hidden").length);
		$(".collapsible").removeClass("active");
		var collapsibleContent = $(this).next(".collapsible-content");
		$(".collapsible").find("img").attr('src',"/SummersDrilling/images/downArrow.png");
		$(".collapsible").next(".collapsible-content:visible").slideUp();
		if(openThis){
			collapsibleContent.slideDown();
			$(this).find("img").attr('src',"/SummersDrilling/images/upArrow.png");
			$(this).addClass("active");
		}
	});
});
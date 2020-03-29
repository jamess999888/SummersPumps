var slideIndex = 0;
var timer = null;
$( document ).ready(function() {
	$("video").each(function() {
		this.addEventListener('ended',myHandler,false);
			function myHandler(e) {
				autoSlide();
			}
	});
    autoSlide();
});

// Next/previous controls
function goBack() {
  slideIndex--;
  if (slideIndex < 1) {slideIndex = $(".mySlides").length}
  slideIndex--;
  autoSlide();
}

function autoSlide() {
  clearTimeout(timer);
  showSlides(slideIndex += 1);
  if($(".mySlides:visible").find('video').length) {
		//restart video, handeler will deal with changing the page when video finishes.
        $(".mySlides:visible").find("video")[0].currentTime = 0;
		$(".mySlides:visible").find("video")[0].play();
    }
  else{
	  timer = setTimeout(autoSlide, 10000);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
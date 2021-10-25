var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function terkirim(){
	window.alert("Terima Kasih, Pembatalan Anda akan kami proses. Mohon menunggu sampai kami kabari lagi. Proses ini memerlukan waktu 24 jam.");
}

function terkirim2(){
	window.alert("Terima Kasih, Pesan anda telah terkirim.");
}

function terkirim3(){
	window.alert("Tersimpan.");
}

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

function myFunction2() {
  var x = document.getElementById("myText2").value;
  document.getElementById("demotanggal").innerHTML = x;
}

function myFunction3() {
  var x = document.getElementById("myText3").value;
  document.getElementById("demogender").innerHTML = x;
}
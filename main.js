const slideList = [
	"images/img1.jpg",
	"images/img2.jpg",
	"images/img3.jpg",
	"images/img4.jpg",
	"images/img5.jpg",
];

const dogImage = document.querySelector(".photo");
let slideIndex = 0;

function showSlides() {
	slideIndex++;
	if (slideIndex + 1 > slideList.length) {
		slideIndex = 0;
	}
	dogImage.src = slideList[slideIndex];
}

setInterval(showSlides, 4000);

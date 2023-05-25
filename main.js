const slideList = [
	"images/img1.jpg",
	"images/img2.jpg",
	"images/img3.jpg",
	"images/img4.jpg",
	"images/img5.jpg",
];
const paws = [...document.querySelectorAll(".paw")];
const dogImage = document.querySelector(".photo");
let slideIndex = 0;

const changePaw = () => {
	document.querySelector(".active").classList.remove("active");
	paws[slideIndex].classList.add("active");
};

function showSlides() {
	slideIndex++;
	if (slideIndex + 1 > slideList.length) {
		slideIndex = 0;
	}
	changePaw();

	dogImage.src = slideList[slideIndex];
}

setInterval(showSlides, 4000);

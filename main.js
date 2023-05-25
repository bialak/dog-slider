const slideList = [
	"images/img1.jpg",
	"images/img2.jpg",
	"images/img3.jpg",
	"images/img4.jpg",
	"images/img5.jpg",
];
const paws = [...document.querySelectorAll(".paw")];
const dogImage = document.querySelector(".photo");
let index = 0;

const changePaw = () => {
	document.querySelector(".active").classList.remove("active");
	paws[index].classList.add("active");
};

function showSlides() {
	index++;
	if (index + 1 > slideList.length) {
		index = 0;
	}
	changePaw();

	dogImage.src = slideList[index];
}

setInterval(showSlides, 4000);

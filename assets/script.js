const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Déclaration et initialisation de selected et slides dans une portée globale
let selected = 0;


//définition de la fonction slideElement
function slideElement(selected) {
    const imageSlide = document.querySelector('.banner-img');
    imageSlide.src = slides[selected].image;

	const tagLineSlide = document.querySelector('.description');
    tagLineSlide.innerHTML = slides[selected].tagLine;
}


//event listener 
const arrow_r = document.getElementById('arrow_r');
const arrow_l = document.getElementById('arrow_l');
const dots = document.querySelectorAll('.dot')

arrow_r.addEventListener('click', slideRight);
arrow_l.addEventListener('click', slideLeft);

function slideRight() {
    ++selected;
    if (selected === slides.length) {
        selected = 0;
    }
    updateSlide();
	updateDots();
	console.log('Flèche droite cliquée')
}

function slideLeft() {
    --selected;
    if (selected < 0) {
        selected = slides.length - 1;
    }
    updateSlide();
	updateDots();
	console.log('Flèche gauche cliquée')
}

function updateSlide() {
    // Appeler la fonction slideElement avec la valeur actuelle de selected
    slideElement(selected);
}

function updateDots() {
    // Réinitialiser la classe dot_selected sur tous les dots
    dots.forEach(dot => {
        dot.classList.remove('dot_selected');
    });
	// Ajouter la classe dot_selected au dot correspondant à l'image actuelle
	dots[selected].classList.add('dot_selected');
}

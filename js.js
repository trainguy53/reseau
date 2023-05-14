// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

// ================================================================================================================= //
	// variables
// ================================================================================================================= //

const titreDeLaPageParent = window.parent.document.title;

// ================================================================================================================= //
	// fonctions
// ================================================================================================================= //

var themeDeLaPage = "clair";

function changerLeThemeDeLaPage() {

	"use strict";
	if (themeDeLaPage === "sombre") {
		themeDeLaPage = "clair";
		clair.style.display = "none";
		sombre.style.display = "block";
	} else {
		themeDeLaPage = "sombre";
		clair.style.display = "block";
		sombre.style.display = "none";
	}
	switch (titreDeLaPageParent) {
		case "Accueil – Train Guy 53":
			window.parent.fond.src = "index/tgv/" + themeDeLaPage + ".png";
			break;
		case "Locomotives – Train Guy 53":
			window.parent.temps.src = "locomotives/temps/" + themeDeLaPage + ".png";
			break;
	}
	for (var i = document.getElementsByClassName("imgFond").length - 1; i >= 0; i--) {
		document.getElementsByClassName("imgFond")[i].src = "nav/" + themeDeLaPage + "/" + i + ".png";
	}

}

const urlHtml = "https://validator.w3.org/nu/?doc=https%3A%2F%2Ftrainguy53.github.io%2Freseau%2F";
const urlCss = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftrainguy53.github.io%2Freseau";
const urlJs = "https://js.js";
const pages = {
	"Accueil – Train Guy 53": "index.html",
	"Locomotives – Train Guy 53": "locomotives.html",
	"Voitures – Train Guy 53": "voitures.html",
	"Wagons – Train Guy 53": "wagons.html",
	"Maquettes – Train Guy 53": "maquettes.html"
};

function validation(langage) {

	"use strict";
	switch (langage) {
		case "html":
			if (titreDeLaPageParent in pages) {window.open(urlHtml + pages[titreDeLaPageParent], "_blank")}
			break;
		case "css":
			window.open(urlCss, "_blank");
			break;
		case "js":
			window.open(urlJs, "_blank");
			break;
	}

}

const pause = 3000; // milisecondes

function basculerImages() {

	const imgReseau = document.querySelectorAll(".imgReseau");
	const imgWikipediaThumb = document.querySelectorAll(".imgWikipediaThumb");
	imgReseau.forEach(img => img.style.display = "block");
	imgWikipediaThumb.forEach(img => img.style.display = "none");
	setInterval(
		() => {
			imgReseau.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
			imgWikipediaThumb.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
		},
		pause
	);

}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //
// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

const titrePageParent = window.parent.document.title;
const pages = {
	"Accueil — Train Guy 53": "index.html",
	"Locomotives — Train Guy 53": "locomotives.html",
	"Voitures — Train Guy 53": "voitures.html",
	"Wagons — Train Guy 53": "wagons.html",
	"Maquettes — Train Guy 53": "maquettes.html",
	"Rails — Train Guy 53": "rails.html"
};

function cacherImagesInternet() {
	const imgInternet = document.querySelectorAll(".img-internet");
	imgInternet.forEach(img => img.style.display = "none");
}

function basculerImages() {
	const imgInternet = document.querySelectorAll(".img-internet");
	const imgRéseau = document.querySelectorAll(".img-réseau");
	imgRéseau.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
	imgInternet.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                   Train Guy 53                                                    //
//                                                                                                                   //
// ================================================================================================================= //

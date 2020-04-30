function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');

let hidden = document.getElementById(lightboxID);
hidden.classList.remove('hidden');
}


function unhideLightbox1() {
unhideLightbox('rome1');
}
document.getElementById('picture-1').onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox('rome2');
}
document.getElementById('picture-2').onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox('rome3');
}
document.getElementById('picture-3').onclick = unhideLightbox3;




function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');

let addlightbox = document.getElementById(lightboxID);
addlightbox.classList.add('hidden');
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;

function showImage() {	
	var rickandmortyimage = document.getElementById("rickandmorty");
	rickandmortyimage.hidden = !rickandmortyimage.hidden;
};


function toggleContent(contentId) {
	untoggleAllContent();
	
	var content = document.getElementById(contentId);
	content.hidden = false;
};

function untoggleAllContent() {
	// TODO untoggle all contents
};
function openLightbox(e) {
    let imageUrl = e.target.parentNode.getAttribute('href');

    let imageElement = document.querySelector('#lightboxtarget > img');

    imageElement.style.visibility = "hidden";
    imageElement.src = imageUrl;
    imageElement.addEventListener('load', function() {
        imageElement.style.visibility = "visible";
    }, false);

    document.getElementById('lightbox').classList.add('lightboxactive');
    
    e.preventDefault();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('lightboxactive');
}
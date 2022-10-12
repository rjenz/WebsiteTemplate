function openLightbox(e) {
    let imageUrl = e.target.parentNode.getAttribute('href');
    document.getElementById('lightboxtarget').style.backgroundImage = `url('${imageUrl}')`;
    document.getElementById('lightbox').classList.add('lightboxactive');
    e.preventDefault();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('lightboxactive');
}
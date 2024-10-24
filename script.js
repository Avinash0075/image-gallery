function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightbox.style.display = 'block';
    lightboxImage.src = element.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


function filterImages(category) {
    const images = document.querySelectorAll('.gallery .image');
    
    images.forEach(image => {
        if (category === 'all') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}

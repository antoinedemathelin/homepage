document.addEventListener('DOMContentLoaded', function() {
    // Get all vignette images
    const vignetteImgs = document.querySelectorAll('.vignette-img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.querySelector('.modal-image');

    // Loop through each vignette image
    vignetteImgs.forEach(function(vignetteImg) {
        // Open modal when a vignette is clicked
        vignetteImg.addEventListener('click', function() {
            modal.style.display = 'flex'; // Show the modal
            modalImage.src = this.src; // Set the modal image source to the clicked image
        });
    });

    // Close modal when the grey shadow (modal background) is clicked
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none'; // Hide the modal
            modalImage.classList.remove('zoomed'); // Remove zoom class if present
        }
    });

    // Toggle zoom when the modal image is clicked
    modalImage.addEventListener('click', function() {
        this.classList.toggle('zoomed'); // Toggle the zoom class
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function () {
            modal.classList.add('open');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    // Close modal on outside click
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('open');
            modalImg.src = '';
        }
    });

    // Optional: Close modal on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            modal.classList.remove('open');
            modalImg.src = '';
        }
    });
});
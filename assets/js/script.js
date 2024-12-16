document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const description = btn.closest('.experience-item').querySelector('.description');
        const isHidden = description.classList.contains('d-none');

        description.classList.toggle('d-none');
        btn.textContent = isHidden ? '-' : '+';
    });
});
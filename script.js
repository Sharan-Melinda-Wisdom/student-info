document.querySelectorAll('.details-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const isHidden = details.hasAttribute('hidden');

        if (isHidden) {
            details.removeAttribute('hidden');
            button.textContent = 'HIDE DETAILS';
        } else {
            details.setAttribute('hidden', '');
            button.textContent = 'SHOW DETAILS';
        }
    });
});

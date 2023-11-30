const parentContainer = document.querySelector('.merch-feedback');

parentContainer.addEventListener('click', event => {
    const current = event.target;

    const isFillFormBtn = current.classList.contains('open-form-btn');

    if (!isFillFormBtn) return;

    const container = current.closest('.merch-feedback');

    const currentText = container.querySelector('.form-text');

    currentText.classList.toggle('form-text--show');
    current.style.display = 'none';
});

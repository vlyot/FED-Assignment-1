
const parentContainer =  document.querySelector('.merch-feedback');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('open-form-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.form-text');

    currentText.classList.toggle('form-text--show');

    current.textContent = current.textContent.includes('OPEN FORM');

    const NewText = event.target.parentNode.querySelector('.open-from-btn');

    NewText.classList.toggle('open-form-btn--hide');

})
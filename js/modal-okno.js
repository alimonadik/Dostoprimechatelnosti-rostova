

const modalController = ({ modal, btnOpen, btnClose }) => {
    const buttonElems = document.querySelectorAll(btnOpen)
    const modalElem = document.querySelector(modal)

    modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

    const closeModal = event => {
        const target = event.target

        if (target === modalElem || target.closest(btnClose)) {
            modalElem.style.visibility = 'hidden';
            modalElem.style.opacity = 0;
            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, 300)
        }

    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
    };

    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal)
    });


    modalElem.addEventListener('click', closeModal)
};
modalController({
    modal: '.modal1',
    btnOpen: '.section-button-1',
    btnClose: '.modal-close'
});
modalController({
    modal: '.modal2',
    btnOpen: '.section-button-2',
    btnClose: '.modal-close'
});
modalController({
    modal: '.modal3',
    btnOpen: '.section-button-3',
    btnClose: '.modal-close'
});
modalController({
    modal: '.modal4',
    btnOpen: '.section-button-4',
    btnClose: '.modal-close'
});
modalController({
    modal: '.modal5',
    btnOpen: '.section-button-5',
    btnClose: '.modal-close'
});
modalController({
    modal: '.modal6',
    btnOpen: '.section-button-6',
    btnClose: '.modal-close'
});
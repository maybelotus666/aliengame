const dialog =  document.querySelector('dialog');
const closeButton = dialog.querySelector('#fechar');
const openButton = document.getElementById('open-modal');

openButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', () => {
    dialog.close();
});

//fecha o modal ao clicar fora dele//

dialog.addEventListener( 'click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = ( 
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
});


    if ( !isInsideDialog ) {
        dialog.close();
    }
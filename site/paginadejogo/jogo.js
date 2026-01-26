const emojis=["☠️","💎","✨"];
const itens = document.querySelectorAll('.item');
function girar () {
   let contador = 0;
    const intervalo = setInterval(() => { itens.forEach(item => { 
        const emojiAleatorio = 
        emojis[Math.floor(Math.random() * emojis.length)];
        item.textContent = emojiAleatorio; 
    });
    contador++;

    if (contador > 20 ) {
        clearInterval(intervalo);
    }
    }, 100);
}

document.querySelector('.botao-girar').addEventListener('click', girar);

item.classList.add('girando');
item.classList.remove('girando');


let minutos = 0;
let segundos = 0;
let cronometroAtivo = null;

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo.toString();
}

function atualizarTempo() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    const tempoDisplay = document.getElementById('tempo');
    tempoDisplay.textContent = `${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
}

document.getElementById('iniciar').addEventListener('click', () => {
    if (cronometroAtivo === null) {
        cronometroAtivo = setInterval(atualizarTempo, 1000);
    }
});

document.getElementById('pausar').addEventListener('click', () => {
    clearInterval(cronometroAtivo);
    cronometroAtivo = null;
});

document.getElementById('continuar').addEventListener('click', () => {
    if (cronometroAtivo === null) {
        cronometroAtivo = setInterval(atualizarTempo, 1000);
    }
});

document.getElementById('zerar').addEventListener('click', () => {
    minutos = 0;
    segundos = 0;
    clearInterval(cronometroAtivo);
    cronometroAtivo = null;
    atualizarDisplay();
});


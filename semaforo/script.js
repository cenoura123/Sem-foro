const red = document.getElementById('SemVermelho');
const yellow = document.getElementById('SemAmarelo');
const green = document.getElementById('SemVerde');
const semaforo = document.getElementById('sem');
const atomatic = document.getElementById('SemAutomatico')
const Off = document.getElementById("OFF")
let sem = false

function SemRed () {
    semaforo.src = './img/vermelho.png';
}
function SemYellow () {
    semaforo.src = './img/amarelo.png';
}
function SemGreen () {
    semaforo.src = './img/verde.png';
}

// FUNÇÕES ACIMA SAO AS MESMA DO DA LAMPADA NADA MUITO INDECIFRAVEL SOMENTE TROCAS DE (SRC)

function automatic () { 
    if (sem == false) { // DIZEMOS QUE SE "SEM" FOR IGUAL A FALSE EXECUTA O COMANDO ABAIXO
        sem = true; // AQ PREVINIMOS QUE O "SEM" QUE O COMO AUTOMATICO NAO EXECUTE NOVAMENTE PQ ELE E TRUE
        SemRed(); // AQ FUNÇÃO DE IMG DO SEMAFORO VERMELHO A CIMA
        setTimeout(() => {
            SemYellow(); // AQ É SETTIMEOUT QUE A MESMA COISA QUE O WAIT DO PYTHON
        }, 2000); // TEMPO DE TROCA
        setTimeout(() => {// AQ É SETTIMEOUT QUE A MESMA COISA QUE O WAIT DO PYTHON
            SemGreen();// AQ FUNÇÃO DE IMG DO SEMAFORO VERDE A CIMA
        }, 3000);// TEMPO DE TROCA
        setTimeout(() => {
            sem = false // NESTE TIMEOUT NOS FAZEMOS QUE O USUARIO CONSIGA EXECUTAR NOMAVE
        }, 3100);
        }
}

function automaticc(){
    tempo = setInterval(automatic, 3150) // tempo que a função acima vai ser executada e sim tem que uma sicronização.
}

function OFF () {
    semaforo.src = './img/desligado.png'; // mudando a img pra desligado 
    clearInterval(tempo) // deixando o mini loop de acima parado
}


red.addEventListener('click', SemRed);
yellow.addEventListener('click', SemYellow);
green.addEventListener('click', SemGreen);
atomatic.addEventListener('click', automaticc);
Off.addEventListener('click', OFF)
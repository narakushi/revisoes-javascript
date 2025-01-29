/** captura de elementos */
const timerHtml = document.querySelector(".timer");

/** função para retornar o tempo */

function getBySeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" })
}

/** temporizador */

const managementTimer = () => {
    let seconds = 0;
    let interval;

    return {
        start() {
            // sem verificar o intervalo ou limpa-lo, são criados
            //varios intervalos!

            if (!interval) {
                interval = setInterval(() => {
                    seconds++;
                    timerHtml.innerText = getBySeconds(seconds);
                }, 1000)
            }

        },
        pause() {
            clearInterval(interval);
            interval = null;
        },
        clear() {
            clearInterval(interval);
            interval = null;
            seconds = 0;
            timerHtml.innerText = "00:00:00";
        }
    }
}

const timer = managementTimer();

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-start")) {
        timer.start();
    }
    else if (e.target.classList.contains("btn-pause")) {
        timer.pause();
    }
    else if (e.target.classList.contains("btn-clear")) {
        timer.clear();
    }
})
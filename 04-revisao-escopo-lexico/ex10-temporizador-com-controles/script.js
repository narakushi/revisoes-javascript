/** captura de elementos */
const timerHtml = document.querySelector(".timer");

/** temporizador */

const managementTimer = () => {
    let seconds = 0;
    let interval;
    
    function getBySeconds() {
        const data = new Date(seconds*1000);
        return data.toLocaleTimeString("pt-BR", {hour12: false, timeZone: "GMT"})
    }

    return {
        start() {
            interval = setInterval(() => {
                seconds++;
                timerHtml.innerText = getBySeconds();
            }, 1000)
        },
        pause() {
            setTimeout(() => {
                clearInterval(interval);
            })
        },
        clear() {
            setTimeout(() => {
                clearInterval(interval);
                seconds = 0;
                timerHtml.innerText = "00:00:00";
            })
        }
    }
}

const timer = managementTimer();

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-start")){
        timer.start();
    }
    else if(e.target.classList.contains("btn-pause")){
        timer.pause();
    }
    else if(e.target.classList.contains("btn-clear")){
        timer.clear();
    }
})
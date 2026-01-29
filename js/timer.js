
const timerBlock = document.querySelector('.timer__time')
const deadline = new Date(' 30 january 2026').getTime();

let interval;

const updateClock = () => {
    const date = new Date().getTime(); // по умолчанию 01/01/1970
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000 // разница между датами в секундах 

    const days = Math.floor(timeRemaining / 60 / 60 / 24)
    const hours = Math.floor((timeRemaining / 60 / 60) % 24)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const seconds = Math.floor(timeRemaining % 60)

    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;






    timerBlock.textContent = `${days}:${fHours}:${fMinutes}:${fSeconds}`

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = '00:00:00'
    }
}

updateClock();

interval = setInterval(updateClock, 500)




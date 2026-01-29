const links = document.querySelectorAll('.menu-list__link')
const btn = document.querySelector('.main__button')
const mainBtn = document.querySelector('.main__scroll')

const allLinks = [...links, btn, mainBtn] // оператор spread, чтобы добавить кнопку "тест-драйв" к массиву ссылок

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const id = link.getAttribute('href').substring(1) // substring - отрезает символ # от id
        const section = document.getElementById(id)
        if (section) {
            seamless.scrollIntoView(section, { // библ-ка seamless scroll polyfill из npm для плавного скролла и для работы на safari
                behavior: "smooth",
                block: "center",
                inline: "center",
            })
        }
    })
})
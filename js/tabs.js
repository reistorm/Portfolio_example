const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabImagesLeft = document.querySelectorAll('.feature__img')

const headers = document.querySelectorAll('h2');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2; // Центр окна
    let currentHeader = null;

    headers.forEach(header => {
        // Позиция вершины элемента
        const headerTop = header.offsetTop;
        // Высота элемента
        const headerHeight = header.offsetHeight;

        // Проверка, достигает ли центр окна этого <h1>
        if (scrollPos >= headerTop && scrollPos < headerTop + headerHeight) {
            currentHeader = header;
        }
    });

    if (currentHeader) {
        // Например, меняем название
        document.title = currentHeader.textContent;
    }
});

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}



tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler
        //     tabDescriptions.forEach((descr) => {
        //         if (descr.dataset.tabsField === dataValue) {
        //             descr.classList.remove('hidden')
        //         } else {
        //             descr.classList.add('hidden')
        //         }
        //     })

        // tabImages.forEach((image) => {
        //     if (image.dataset.tabsField === dataValue) {
        //         image.classList.remove('hidden')
        //     } else {
        //         image.classList.add('hidden')
        //     }
        // })

        changeContent(tabDescriptions, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(tabImagesLeft, dataValue)

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })
})
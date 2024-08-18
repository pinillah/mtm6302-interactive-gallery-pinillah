// Declares variables
const $imgContainer = document.getElementById('imgContainer')

const $imgModal = document.querySelector('.imgModal')

const images = []

// Adds array with img info
const imagesArray = [{
        src: 'img/1.jpg',
        large: 'img/1-HD.jpg',
        caption: 'Scenery 1',
    },

    {
        src: 'img/2.jpg',
        large: 'img/2-HD.jpg',
        caption: 'Scenery 2',
    },

    {
        src: 'img/3.jpg',
        large: '/img/3-HD.jpg',
        caption: 'Scenery 3',
    },

    {
        src: 'img/4.jpg',
        large: 'img/4-HD.jpg',
        caption: 'Scenery 4',
    },

    {
        src: 'img/5.jpg',
        large: 'img/5-HD.jpg',
        caption: 'Scenery 5',
    },

    {
        src: 'img/6.jpg',
        large: 'img/6-HD.jpg',
        caption: 'Scenery 6',
    },

    {
        src: 'img/7.jpg',
        large: 'img/7-HD.jpg',
        caption: 'Scenery 7',
    },

    {
        src: 'img/8.jpg',
        large: 'img/8-HD.jpg',
        caption: 'Scenery 8',
    },

    {
        src: 'img/9.jpg',
        large: 'img/9-HD.jpg',
        caption: 'Scenery 9',
    },

    {
        src: 'img/10.jpg',
        large: 'img/10-HD.jpg',
        caption: 'Scenery 10',
    },

    {
        src: 'img/11.jpg',
        large: 'img/11-HD.jpg',
        caption: 'Scenery 11',
    },

    {
        src: 'img/12.jpg',
        large: 'img/12-HD.jpg',
        caption: 'Scenery 12',
    },
]

// for loop, push html with array info
for (const imageData of imagesArray) {
    images.push(`<img class="imgThumbnail" src="${imageData.src}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

$imgContainer.innerHTML = images.join('')

// event listener for HD version
$imgContainer.addEventListener('click', function (e) {
    const $imgThumbnail = e.target.closest('.imgThumbnail')
    $imgModal.innerHTML = `<img src="${$imgThumbnail.dataset.large}">   
    <small>${$imgThumbnail.dataset.caption}</small>`
    $imgModal.classList.add('hd')
})

// event listener to remove HD version
$imgModal.addEventListener('click', function () {
    $imgModal.classList.remove('hd')
})

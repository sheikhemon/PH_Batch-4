const imageLink = [
    'image/1.png',
    'image/2.png',
    'image/3.png',
    'image/4.png',
    'image/5.png',
    'image/6.png',
    'image/7.png',
    'image/8.png',
    'image/9.png'
];
let imageIndex = 0;
const sliderImage = document.getElementById('slider-image');
setInterval(() => {
    if (imageIndex >= imageLink.length) {
        imageIndex = 0;
    }
    const imgUrl = imageLink[imageIndex]
    sliderImage.setAttribute('src', imgUrl)
    imageIndex++
}, 2000)
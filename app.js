const gallery = document.getElementById('gallery');

const images = [
    "https://your-username.github.io/repository-name/image1.gif",
    "https://your-username.github.io/repository-name/image2.jpg",
    "https://your-username.github.io/repository-name/image3.png"
];

images.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    gallery.appendChild(img);
});

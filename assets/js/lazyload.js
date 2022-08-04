// Listen My Website are Loaded
document.addEventListener('DOMContentLoaded', ready);

function ready() {

    var lazyImgs = document.querySelectorAll('[lazy-src]');

    //entries giá trị hiện tại của Img
    let observer = new IntersectionObserver((entries) => {

        //Tiếp tục Loop entries để lấy ra isIntersecting của nó
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                loadImg(entry.target);
                observer.unobserve(entry.target);
            }
        });

    });

    lazyImgs.forEach(img => {

        //Khi load ảnh đến viewport, observer.observe(img) thì isIntersecting: true
        observer.observe(img);
    });
}

function loadImg(img) {

    const url = img.getAttribute('lazy-src');
    img.setAttribute('src', url);

    img.removeAttribute('lazy-src');
}
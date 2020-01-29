let app = function (){
    gridAnimation();
    showImageSlides(showSlides);
    
}
let index = 0;
app();
// Hiệu ứng background ở Section 1
function gridAnimation(){
    let timeLine = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    timeLine.add({
        targets:'.section-1 .grid-animation-bg div.background',
        width:'100%',
        backgroundColor:'rgb(197,197,255)',
        delay: anime.stagger(100)
    });
    timeLine.add({
        targets:'.section-1 .grid-animation-bg div.background',
        width:'90%',
        backgroundColor:'rgb(197,197,255)',
        delay: anime.stagger(100)
    });
    timeLine.add({
        targets:'.section-1 h1',
        top: '20%',
        opacity:1,
        duration:4000

    },'-=1600');
    let rotateMe = anime({
        targets:'.section-1 .grid-animation-bg',
        translateX:'40%',
        rotate: '45deg',
        duration: 5000,
        autoplay: false
    });
    document.querySelector('.section-1 h1').addEventListener('mouseover',() =>{
        rotateMe.play();
    })
};
// Slide ở section 1
function showImageSlides(showSlides){
    fetch('../json/sectionSlide.json')
    .then((res) => {return res.json();})
    .then((images) =>{
        let output = "";
        images.forEach(image => {
            output += `
            <div class="img-hoder">
                <img src="${image.image}" alt="">
            </div>
            `;
        });
        document.querySelector('.slider-wrap').innerHTML = output;
        return showSlides();
    })
   
}
function showSlides() {
    
    const slides = document.getElementsByClassName('img-hoder');
     for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";     
     }
     index++;
     if (index > slides.length) {index = 1};
     slides[index-1].style.display = "block";  
     setTimeout(showSlides,2000);
 }
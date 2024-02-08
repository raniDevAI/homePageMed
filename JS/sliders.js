const heroSlides=Array.from(document.querySelectorAll(".hero .slide"))
const heroSliderTrack=document.getElementById("heroSliderTrack")
const heroSliderBtnRight=document.getElementById("heroSliderBtnRight")
const heroSliderBtnLeft=document.getElementById("heroSliderBtnLeft")
const heroSliderDots=Array.from(document.getElementById("heroSliderNav").children)

let heroSlideWidth=heroSlides[0].getBoundingClientRect().width
let heroCurSlide=0
const heroNumSlides=heroSlides.length-1

const conseilsSlides=Array.from(document.querySelectorAll(".conseils .slide"))
const conseilsSliderTrack=document.getElementById("conseilsSliderTrack")
const conseilsSliderBtnRight=document.getElementById("conseilsSliderBtnRight")
const conseilsSliderBtnLeft=document.getElementById("conseilsSliderBtnLeft")
const conseilsSliderDots=Array.from(document.getElementById("conseilsSliderNav").children)

let conseilsSlideWidth=conseilsSlides[0].getBoundingClientRect().width
let conseilsCurSlide=0
const conseilsNumSlides=conseilsSlides.length-1

const sliders={
    hero:{
        slides:heroSlides,
        track:heroSliderTrack,
        sliderDots:heroSliderDots,
        slideWidth:heroSlideWidth,
        curSlide:heroCurSlide,
        numSlides:heroNumSlides
    },
    conseils:{
        slides:conseilsSlides,
        track:conseilsSliderTrack,
        sliderDots:conseilsSliderDots,
        slideWidth:conseilsSlideWidth,
        curSlide:conseilsCurSlide,
        numSlides:conseilsNumSlides
    }
}


function setupSlidesPos(slider){
    const {slides,slideWidth}=slider
    slides.forEach((slide,ind)=>{
        slide.style.left=`${slideWidth*ind}px`
    })
}

function moveSlider(slider){
    const {track,curSlide,slideWidth}=slider
    track.style.left=`-${slideWidth*curSlide}px`
    styleDots(slider)
}

function moveRight(slider){
    const {numSlides}=slider
    let {curSlide}=slider
    if(curSlide==numSlides){
        slider.curSlide=0
    }else{
        slider.curSlide=slider.curSlide+1
    }
    moveSlider(slider)
}

function moveLeft(slider){
    const {numSlides}=slider
    let {curSlide}=slider
    if(curSlide==0){
        slider.curSlide=numSlides
    }else{
        slider.curSlide=slider.curSlide-1
    }
    moveSlider(slider)
}

function styleDots(slider){
    const {sliderDots,curSlide}=slider
    sliderDots.forEach(dot=>{
        dot.classList.remove("selected-dot")
    })
    sliderDots[curSlide].classList.add("selected-dot")
}



setupSlidesPos(sliders.hero)
styleDots(sliders.hero)
heroSliderBtnRight.addEventListener("click",()=>{
    moveRight(sliders.hero)
})
heroSliderBtnLeft.addEventListener("click",()=>{
    moveLeft(sliders.hero)
})

heroSliderDots.forEach((dot,ind)=>{
    dot.addEventListener("click",()=>{
        sliders.hero.curSlide=ind
        moveSlider(sliders.hero)
    })
})


setupSlidesPos(sliders.conseils)
styleDots(sliders.conseils)
conseilsSliderBtnRight.addEventListener("click",()=>{
    console.log("works")
    moveRight(sliders.conseils)
})
conseilsSliderBtnLeft.addEventListener("click",()=>{
    moveLeft(sliders.conseils)
})
conseilsSliderDots.forEach((dot,ind)=>{
    dot.addEventListener("click",()=>{
        sliders.conseils.curSlide=ind
        moveSlider(sliders.conseils)
    })
})

window.addEventListener("resize",()=>{
    heroSlideWidth=heroSlides[0].getBoundingClientRect().width
    conseilsSlideWidth=conseilsSlides[0].getBoundingClientRect().width
})

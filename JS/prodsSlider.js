const prodsSliderContainer=document.querySelector(".prods .slider-container")
const prodsSliderBtnRight=document.getElementById("prodsSliderBtnRight")
const prodsSliderBtnLeft=document.getElementById("prodsSliderBtnLeft")
const detectScrollEnd=document.getElementById("detectScrollEnd")

let prodsSliderContainerWidth=prodsSliderContainer.getBoundingClientRect().width

const prodsSliderEndObserver=new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        prodsSliderBtnRight.classList.add("btn-inactive")
    }else{
        prodsSliderBtnRight.classList.remove("btn-inactive")
    }
      
    });
})

prodsSliderEndObserver.observe(detectScrollEnd)

function manageLeftBtn(){
    if(prodsSliderContainer.scrollLeft==0){
        prodsSliderBtnLeft.classList.add("btn-inactive")
    }else{
        prodsSliderBtnLeft.classList.remove("btn-inactive")
    }
}

prodsSliderBtnRight.addEventListener("click",()=>{
    prodsSliderContainer.scrollBy({
        left:prodsSliderContainerWidth,
        behavior:"smooth"
    })
    manageLeftBtn()
})
prodsSliderBtnLeft.addEventListener("click",()=>{
    prodsSliderContainer.scrollBy({
        left:-prodsSliderContainerWidth,
        behavior:"smooth"
    })
    manageLeftBtn()
})

prodsSliderContainer.addEventListener("scroll",manageLeftBtn)
window.addEventListener("resize",()=>{prodsSliderContainerWidth=prodsSliderContainer.getBoundingClientRect().width})
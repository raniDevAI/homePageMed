const prodsDropDownBtn=document.getElementById("prodsDropDownBtn")
const prodsDropDown=document.getElementById("prodsDropdown")
const servicesDropDownBtn=document.getElementById("servicesDropDownBtn")
const servicesDropDown=document.getElementById("servicesDropdown")

const bottomNavLi=Array.from(document.querySelectorAll(".header-bottom-nav li"))

bottomNavLi.forEach(li=>{
    li.addEventListener("click",()=>{
        bottomNavLi.forEach(li=>{
            li.classList.remove("selected-li")
        })
        li.classList.add("selected-li")
        if(!li.classList.contains("dropdown-li")){
            servicesDropDown.classList.remove("dropdown-shown")
            prodsDropDown.classList.remove("dropdown-shown")
        }
    })
})

prodsDropDownBtn.addEventListener("click",()=>{
    prodsDropDown.classList.toggle("dropdown-shown")
    servicesDropDown.classList.remove("dropdown-shown")
})
servicesDropDownBtn.addEventListener("click",()=>{
    servicesDropDown.classList.toggle("dropdown-shown")
    prodsDropDown.classList.remove("dropdown-shown")
})



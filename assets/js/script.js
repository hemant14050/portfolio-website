
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const skillsBtn = document.querySelector("#skills-btn");
const eduBtn = document.querySelector("#edu-btn");
const workBtn = document.querySelector("#work-btn");
const expBtn = document.querySelector("#exp-btn");
const contactBtn = document.querySelector("#contact-btn");


const navButtons = [homeBtn, aboutBtn, skillsBtn, eduBtn, workBtn, expBtn, contactBtn];
for(let i=0; i<navButtons.length; i++) {
    navButtons[i].addEventListener("click",() => {
        let curr = document.querySelector(".active");
        curr.classList.remove("active");
        navButtons[i].classList.add("active");
    });
}

for(let i=0; i<navButtons.length; i++) {
    navButtons[i].addEventListener("mouseenter",() => {
        // let curr = document.querySelector(".active");
        // curr.classList.remove("active");
        navButtons[i].classList.add("temp-active");
    });
}

for(let i=0; i<navButtons.length; i++) {
    navButtons[i].addEventListener("mouseleave",() => {
        // let curr = document.querySelector(".active");
        // curr.classList.remove("active");
        navButtons[i].classList.remove("temp-active");
    });
}


const dataLang = document.querySelector("[data-lang]");
const dataLibra = document.querySelector("[data-libra]");
const dataTool = document.querySelector("[data-tool]");
const dataWork = document.querySelector("[dataWork]");


dataLang.addEventListener("click", ()=> {
    const angleDown = document.querySelector(".sk-angle-down-lang");
    if(angleDown.classList.contains("angleActive")){
        angleDown.classList.remove("angleActive");
        document.querySelector(".sk-angle-up-lang").classList.add("angleActive");
        document.querySelector(".sk-lang").classList.add("show-skill");
    } else {
        document.querySelector(".sk-angle-up-lang").classList.remove("angleActive");
        angleDown.classList.add("angleActive");
        document.querySelector(".sk-lang").classList.remove("show-skill");
    }
});
dataLibra.addEventListener("click", ()=> {
    const angleDown = document.querySelector(".sk-angle-down-libra");
    if(angleDown.classList.contains("angleActive")){
        angleDown.classList.remove("angleActive");
        document.querySelector(".sk-angle-up-libra").classList.add("angleActive");
        document.querySelector(".sk-libra").classList.add("show-skill");
    } else {
        document.querySelector(".sk-angle-up-libra").classList.remove("angleActive");
        angleDown.classList.add("angleActive");
        document.querySelector(".sk-libra").classList.remove("show-skill");
    }
});
dataTool.addEventListener("click", ()=> {
    const angleDown = document.querySelector(".sk-angle-down-tool");
    if(angleDown.classList.contains("angleActive")){
        angleDown.classList.remove("angleActive");
        document.querySelector(".sk-angle-up-tool").classList.add("angleActive");
        document.querySelector(".sk-tool").classList.add("show-skill");
    } else {
        document.querySelector(".sk-angle-up-tool").classList.remove("angleActive");
        angleDown.classList.add("angleActive");
        document.querySelector(".sk-tool").classList.remove("show-skill");
    }
});

dataEdu.addEventListener("click", ()=> {
    if(!dataEdu.classList.contains("activeBtn")) {
        dataWork.classList.remove("activeBtn");
        dataEdu.classList.add("activeBtn"); 
    } else {

    }
});

dataWork.addEventListener("click", ()=> {
    if(!dataWork.classList.contains("activeBtn")) {
        dataEdu.classList.remove("activeBtn");
        dataWork.classList.add("activeBtn"); 
    } else {
        
    }
});
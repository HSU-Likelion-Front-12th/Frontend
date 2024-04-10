const tl = gsap.timeline();

window.addEventListener("DOMContentLoaded", ()=>{
    counter();
    moveAnimation();
})

function counter(){
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
    let animationFinished = false;

    function updateCounter(){
        if(animationFinished) {
            introAnimation();
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue >= 100){
            animationFinished = true;
            currentValue = 100;
        }

        counterElement.textContent = currentValue + "%";

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

function introAnimation(){
    tl.to('.counter', {
        y: -320,
        ease: "power4.inOut",
        duration: 1,
    })
    .to('.counter-wrapper', {
        display: 'none',
    }, '-=.5')
    .to('.line', {
        width: '100%',
        ease: "power2.inOut",
        duration: 1
    })
    .to('.overlay-top', {
        top: '-50%',
        ease: "power2.inOut",
        duration: 1,
    })
    .to('.overlay-bottom', {
        bottom: '-50%',
        ease: "power2.inOut",
        duration: 1,
    }, '<')
    .to(['.overlay-top', '.overlay-bottom', '.line'], {
        display: 'none'
    })
    .to('.nav', {
        height: '120px',
        opacity: 1,
    })
    .fromTo('.intro-text p', {
        y: '80px',
        opacity: 0
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: .2,
    })
}

function moveAnimation() {
    const nav = document.querySelectorAll('li, .logo');
    let i = 3;
    let isAnimating = false;
    let currentSection = document.querySelector('.home');

    nav.forEach(e => {
        e.addEventListener("click", () => {
            const dataTarget = e.getAttribute('data-target');
            const target = document.querySelector(`.${dataTarget}`);
            if (currentSection == target || isAnimating) {
                console.log('현재 섹션이거나 애니메이션 중');
                return;
            }
            currentSection = target;
            isAnimating = true;

            tl.fromTo(target, {
                zIndex: i++,
                left: '200%',
                duration: 2,
                scale: .5,
                ease: 'power4.inOut',
            }, {
                duration: 2,
                left: '50%',
                scale: .5,
                transform: 'translateX(-50%)',
                ease: 'power4.inOut',
            })
                .to(target, {
                    scale: 1,
                    ease: 'power4.inOut',
                    duration: 1.5,
                    onComplete: () => {
                        if(target.classList.contains("about")){
                            aboutAnimtaion();
                        }
                        else if(target.classList.contains("hobby")){
                            hobbyAnimation();
                        }
                        isAnimating = false;
                    }
                })
        })
    })
}

function aboutAnimtaion(){
    tl.to(".col-left", {
        scale: 1,
        duration: .65,
        ease: 'power2.out',
    })
    .to(".info-box", {
        opacity: 1,
        stagger: .2,
        duration: .65,
        ease: "power4.inOut",
    })
}

function hobbyAnimation(){
    tl.to(".hobby-item", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        stagger: .3,
        ease: "expo.in",
        duration: 1,
    })
}
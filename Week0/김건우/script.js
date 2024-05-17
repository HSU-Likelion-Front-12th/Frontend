
// 대상 요소 선택
let fade_in = document.querySelectorAll(".fade-in-animation");
let fade_in_delayed = document.querySelectorAll(".fade-in-animation-delayed");

// IntersectionObserver 인스턴스 생성
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }
    });
});

for(let i=0; i < fade_in.length; i++){
 
    observer.observe(fade_in[i]);
}
setTimeout(() => {
    for(let i = 0; i < fade_in_delayed.length; i++){
        observer.observe(fade_in_delayed[i]);
    }
}, 1500);



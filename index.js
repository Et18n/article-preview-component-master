let bchange=document.getElementById("hi")
let socials=document.getElementById("woah")
let btns=document.querySelectorAll("#share")


window.addEventListener("load",()=>{
    bchange.classList.remove('bchange')
    socials.classList.add('socials')
})



btns.forEach(btn => {
btn.addEventListener("click",()=>{
    bchange.classList.toggle('bchange')
    console.log("this works")
    socials.classList.toggle('socials')
    console.log("does this?")
})
});
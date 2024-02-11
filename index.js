let bchange=document.getElementById("hi")
let socials=document.getElementById("woah")
let btns=document.querySelectorAll("#share")
const primary=document.querySelector('.primary')
const secondary=document.querySelector('.secondary')




window.addEventListener("load",()=>{
    bchange.classList.remove('bchange')
    socials.classList.add('socials')
    primary.classList.remove('hidden')
    secondary.classList.add('hidden')
    socials.classList.add('hidden')
})





function myFunction(x) {
    if (x.matches) { // If media query matches
        btns.forEach(btn => {
            btn.addEventListener("click",()=>{
                bchange.classList.toggle('bchange')
                console.log("this works")
                socials.classList.toggle('socials')
                console.log("does this?")
               
            })
            });
    } else {
      btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
           primary.classList.toggle('hidden')
           secondary.classList.toggle('hidden')
           socials.classList.toggle('hidden')
            
        })
      })
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 375px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });
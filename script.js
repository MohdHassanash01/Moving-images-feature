let elem = document.querySelectorAll(".elem")
let image = document.querySelector(".elem img")

console.log(elem);

// elem.addEventListener("mousemove",function(dets){
//     image.style.left = dets.x+"px"
//     image.style.top = dets.y+"px"

// })


// elem.addEventListener("mouseenter",function(dets){
//   image.style.opacity = 1
// })

// elem.addEventListener("mouseleave",function(dets){
//     image.style.opacity = 0
//   })




elem.forEach(function(val){

val.addEventListener("mouseenter",function(dets){
  val.childNodes[3].style.opacity = 1
})

val.addEventListener("mouseleave",function(dets){
    val.childNodes[3].style.opacity = 0
})


val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left = dets.x+"px"
    val.childNodes[3].style.top = dets.y+"px"
})

})
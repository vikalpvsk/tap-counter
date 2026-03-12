let total = localStorage.getItem("total") || 0

total = Number(total)

const circle = document.getElementById("progress")

const circumference = 691

function update(){

let mala = Math.floor(total/108)

let bead = total % 108

document.getElementById("mala").innerText = mala

document.getElementById("bead").innerText = bead

let progress = (bead/108)*circumference

circle.style.strokeDashoffset = circumference - progress

}

update()

document.body.addEventListener("click", function(e){

if(e.target.tagName !== "BUTTON"){

total++

localStorage.setItem("total", total)

update()

}

})

function reset(){

total = 0

localStorage.setItem("total", total)

update()

}
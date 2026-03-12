let total = localStorage.getItem("total") || 0

total = Number(total)

function updateDisplay(){

let mala = Math.floor(total / 108) + 1
let bead = (total % 108) + 1

document.getElementById("mala").innerText = mala
document.getElementById("bead").innerText = bead

}

updateDisplay()

document.body.addEventListener("click", function(){

total++

localStorage.setItem("total", total)

updateDisplay()

})

function reset(){

total = 0

localStorage.setItem("total", total)

updateDisplay()

}
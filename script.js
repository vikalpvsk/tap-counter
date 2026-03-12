let count = localStorage.getItem("count") || 0

document.getElementById("counter").innerText = count

document.body.addEventListener("click", function(){

count++

document.getElementById("counter").innerText = count

localStorage.setItem("count", count)

})

function reset(){

count = 0

localStorage.setItem("count", count)

document.getElementById("counter").innerText = count

}
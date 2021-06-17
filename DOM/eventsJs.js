var headOne = document.querySelector("#headOne")
var headTwo = document.querySelector("#headTwo")
var headThree  = document.querySelector("#headThree")

headOne.addEventListener("mouseover", function() {
    headOne.textContent = "Over me"
    headOne.style.color = "red"
})
headOne.addEventListener("mouseout", function(){
    headOne.textContent="Mouse Over Me"
    headOne.style.color = "black"
})

headTwo.addEventListener("click", function(){
    headTwo.textContent = "I was Clicked!"
    headTwo.style.color = "blue"
})

headThree.addEventListener("dblclick", function(){
    headThree.textContent = "I was double clicked!"
    headThree.style.color = "brown"
})
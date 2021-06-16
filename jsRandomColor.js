const h1 = document.querySelector("#h11")
h1.style.color = "red"

// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor(){
  h1.style.color = getRandomColor()
}
setInterval("changeColor()", 500)


// thông báo "Hello" 2 lần sau đó tắt đi
let timerId = setInterval(() => alert("Hiện 2 lần sau mỗi 3s"), 3000)
setTimeout(() => {clearInterval(timerId); alert("Bye"); }, 6000)

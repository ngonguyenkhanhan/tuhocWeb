//lấy toàn bộ các tag td ra
var squares = document.querySelectorAll("td")

//Lấy id restart
var btnRestart = document.querySelector("#b")

btnRestart.addEventListener("click", function(){
    // click btn restart để xóa các ô thành ô trống
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
        
}
})

// cái này là đã xác định được vị trí của ô rồi
// var cell1 = document.querySelector("#one")  
// cell1.addEventListener("click", function(){
//     if(cell1.textContent ===""){
//         cell1.textContent("X")
//     }else if(cell1.textContent === "X"){
//         cell1.textContent = "O"
//     }else{
//         cell1.textContent = ""
//     }
// })

//Này là hàm để hiển thị nội dung của cell
function changMarked(){
    if(this.textContent ===""){
        this.textContent = "X"
    }else if(this.textContent === "X"){
        this.textContent = "O"
    }else{
        this.textContent = ""
    }
}

// vòng for sẽ quét hết 9 ô này để xem ô nào được click thì nó sẽ
// thực thi function ở trên
for (var i = 0; i <squares.length; i++){
    squares[i].addEventListener("click", changMarked)
    
}

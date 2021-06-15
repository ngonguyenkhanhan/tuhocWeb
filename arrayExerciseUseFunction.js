var mangTen = []
var cmdRequest = "empty"
var cmdStart = prompt("Cho phep bat dau? y/n") // y/n

//cac ham add, remove, display
function add(){
    var themTen = prompt("Hay nhap 1 ten can THEM:")
    mangTen.push(themTen)
}
function remove(){
    var xoaTen = prompt("Hay nhap 1 ten can XOA")
    var index = mangTen.indexOf(xoaTen)
    mangTen.splice(index, 1)
}
function display(){
    console.log(mangTen)
}

if(cmdStart ==="y"){
    while(cmdRequest !== "quit"){
        cmdRequest = prompt("Hay nhap 1 trong cac lenh sau: add, remove, display, quit")
        if(cmdRequest === "add"){
            add()
        }
        else if (cmdRequest ==="remove"){
            remove()
        }
        else if (cmdRequest === "display"){
            display()
        }
    }
}
alert("Cam on ban da su dung Web App")
var startAppWeb = prompt("Bạn có muốn bắt đầu Web App về thêm, xóa mảng không? y/n")
var roster = []
var kthuc = false
if(startAppWeb == "y"){
    kthuc = true
}
else{
    console.log("Kết thúc Web App")
    kthuc = false
}
while(kthuc == true){
    var selectCommand = prompt("Hãy chọn 1 lệnh sau đây: add, remove, display, quit")
    if (selectCommand == "quit"){
        console.log("Ket thuc")
        kthuc = false
    }
    else if(selectCommand == "add"){
        var addName = prompt("Nhập tên để thêm vào mảng roster")
        roster.push(addName)
    }
    else if (selectCommand == "display") {
        console.log(roster)
    } 
    else if (selectCommand == "remove"){
        var removeName = prompt("Nhập tên để xóa khỏi Mảng roster")
        if (roster.length != 0){
            indexRemove = roster.indexOf(removeName)
            roster.splice(indexRemove, 1)
        }
    }
}
// var nguoiChoi1 =  prompt("Người chơi 1, Hãy nhập tên của bạn, bạn sẽ là màu XANH")
// var nguoiChoi2 =  prompt("Người chơi 2, Hãy nhập tên của bạn, bạn sẽ là màu ĐỎ")



//lấy vị trí của btn sau mỗi lần nhấn
// Vị trí dòng là các tr trong table, vị trí cột là các td trong tr
// var posBtnClick = [0,0]
// $('button').on('click', function(){ 
//     var row = $(this).closest('tr').index() //vị trí dòng
//     var col = $(this).closest('td').index() //vị trí cột
//     posBtnClick[0] = row
//     posBtnClick[1] = col
// })
var player1Color = 'rgb(255,0,0)'
var player1Name = prompt("Nhập tên người chơi 1, màu ĐỎ")



var player2Color = 'rgb(0,0,255)'
var player2Name = prompt("Nhập tên người chơi 2, màu XANH")

var currentName = player1Name
var colorChange = player1Color
var currentPlayer = 1


$('p').text(currentName + " bắt đầu chơi.")


$('button').click(function(){
    // var dong = $(this).closest('tr').index() //vị trí dòng
    var cot = $(this).closest('td').index() //vi tri cot
    for(row = 5; row > -1; row--){
        var colorCurrent = returnColor(row, cot)
        if (colorCurrent === 'rgb(128, 128, 128)') {    //neu mau hien tai la mau xam
            changeColor(row, cot, colorChange) //thay doi mau
            break
        }
    }

    if(checkHorizontal() || checkVertical() || checkDiagonal()){
        $('h1').text(currentName + " Chiến Thắng")
        $('h4').fadeOut('fast')
        $('p').fadeOut('fast')
        reportWin()
    }

    currentPlayer = currentPlayer *(-1) //để thay đổi lượt chơi: 1 là người chơi 1, (-1)là người chơi 2

    if(currentPlayer === 1){   // nếu là 1 thì màu của người chơi 1, tức màu đỏ và ngược lại
        currentName = player1Name
        $('p').text(" Tới lượt " + currentName)
        colorChange = player1Color
    }else{
        currentName = player2Name
        $('p').text(" Tới lượt " + currentName)
        colorChange = player2Color
    }
})



function reportWin(){
    alert(currentName + " chiến thắng")
}

var tableRow = $('table tr') 
function returnColor(dong, cot){
    return tableRow.eq(dong).find('td').eq(cot).find('button').css('background-color')
}
function changeColor(dong, cot, color){
    return tableRow.eq(dong).find('td').eq(cot).find('button').css('background-color',color)
}


function check4Color(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}
function checkHorizontal(){
    for (var row = 0; row < 6; row ++){
        for (var col = 0; col<4; col++){
            if(check4Color(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col +2), returnColor(row, col +3))){
                console.log("horizontal at row"+ row)
                return true
            }else {
                continue
            }
        }
    }
}
function checkVertical(){
    for (var col = 0; col < 7; col ++){
        for (var row = 0; row < 3; row++){
            if(check4Color(returnColor(row, col), returnColor(row + 1, col), returnColor(row +2, col), returnColor(row +3, col))){
                console.log("Vertical at Col"+ col)
                return true
            }else {
                continue
            }
        }
    }
}

function checkDiagonal(){
    for (var row = 0; row <6; row ++){
        for(var col = 0; col<7; col ++){
            if(check4Color(returnColor(row, col), returnColor(row + 1, col + 1),returnColor(row + 2, col + 2),returnColor(row + 3, col + 3))){
                console.log("win Diagonal thuan")
                return true
            }
            else if (check4Color(returnColor(row, col), returnColor(row + 1, col - 1),returnColor(row + 2, col - 2),returnColor(row + 3, col - 3))){
                console.log("win Diagonal Nghich")
                return true
            }else{
                continue
            }
        }
    }
}
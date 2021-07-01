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
var colorPlayer1 = 'rgb(255,0,0)'
var colorPlayer2 = 'rgb(0,0,255)'
var doiLuot = 1
$('button').click(function(){
    if(doiLuot ===1){   // nếu là 1 thì màu của người chơi 1 và ngược lại
        colorChange = colorPlayer1
    }else{
        colorChange = colorPlayer2
    }
    var dong = $(this).closest('tr').index() //vị trí dòng
    var cot = $(this).closest('td').index() //vi tri cot
    var r = dong
    var c = cot
    for(row = 5; row > -1; row--){
        var colorCurrent = returnColor(row, cot)
        if (colorCurrent === 'rgb(128, 128, 128)') {    //neu mau hien tai la mau xam
            changeColor(row, cot, colorChange) //thay doi mau
            doiLuot = doiLuot *(-1) //để thay đổi lượt chơi: 1 là người chơi 1, (-1)là người chơi 2
            r = row
            c = cot
            break
        }
    }
    var kiemTraHang = checkHorizontal()
    var kiemTraCot = checkVertical()
    if(kiemTraHang ===true){
        console.log("chien thang HANG")
    }
    if(kiemTraCot === true){
        console.log("chien thang COT")
    }
})

var tableRow = $('table tr') 
function returnColor(dong, cot){
    return tableRow.eq(dong).find('td').eq(cot).find('button').css('background-color')
}
function changeColor(dong, cot, color){
    return tableRow.eq(dong).find('td').eq(cot).find('button').css('background-color',color)
}

// function checkHori(dong, cot){
//     if(returnColor(dong, cot)!=='rgb(128,128,128)'){
//         if((returnColor(dong, cot) === returnColor(dong, cot+1))&&(returnColor(dong, cot)=== returnColor(dong, cot+2))&&((returnColor(dong, cot)=== returnColor(dong, cot+3))||(returnColor(dong, cot)===returnColor(dong, cot-1)))){
//             console.log("win")
//         }
//     }
    
// }


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

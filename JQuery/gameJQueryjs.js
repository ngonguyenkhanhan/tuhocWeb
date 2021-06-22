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
    
    for(row = 5; row > -1; row--){
        var colorCurrent = returnColor(row, cot)
        if (colorCurrent === 'rgb(128, 128, 128)') {    //neu mau hien tai la mau xam
            changeColor(row, cot, colorChange) //thay doi mau
            doiLuot = doiLuot *(-1) //để thay đổi lượt chơi: 1 là người chơi 1, (-1)là người chơi 2
            beark
        }
    }
})

var tableRow = $('table tr') 
function returnColor(dong, cot){
    return tableRow.eq(dong).find('td').eq(cot).find('button').css('background-color')
}
function changeColor(dong, cot, color){
    return tableRow.eq(dong).find('td').eq(cot).find('button').css('background-color',color)
}





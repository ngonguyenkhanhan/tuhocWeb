// var nguoiChoi1 =  prompt("Người chơi 1, Hãy nhập tên của bạn, bạn sẽ là màu XANH")
// var nguoiChoi2 =  prompt("Người chơi 2, Hãy nhập tên của bạn, bạn sẽ là màu ĐỎ")

$('.board button').on('click', function(){
    console.log($(this).closest('td').index())
})
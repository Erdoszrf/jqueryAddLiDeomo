
function getData() {
  var results = []
  for (var i = 0; i < 3; i++) {
    var rand = Math.floor(Math.random() * 100)
    var product = {
      img: '//picsum.photos/200/200/?image=' + rand,
      name: '珂兰 黄金手 猴哥款',
      price: '￥' + rand
    }
    results.push(product)
  }
  return results
}
  function getProdHtml(prod) {
    var html = '';
    html += '<li class="commodity">'
    html += '<div class="stats"></div>'
    html += '<div class="cover">'
    html += '<img src ="'+prod.img+'">'
    html += '<a class="btn delete hide">删除</a></div >'
    html += '<p class="title">' + prod.name + '</p>'
    html += '<p class="price">' + prod.price + '</p>'
    html += '</li>'
    return html
  }
  $('.btn.add').on('click', function (e){
    e.preventDefault()
    $('.stats').removeClass('editstatus')
    $('.btn.delete').addClass('hide')
    var products = getData()
    
    $.each(products, function(idx, prod){
      var html = getProdHtml(prod)
      $('ul').append(html)
    })
  })
$('.btn.edit').on('click',function(){
  $('.stats').toggleClass('editstatus')
  $('.btn.delete').toggleClass('hide')
})

$('ul').on('click','.btn.delete',function(e){
  e.preventDefault()
  $(this).parents('.commodity').remove()
})
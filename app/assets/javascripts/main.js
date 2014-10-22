$(function(){  
  $('#create-team').on('click', function(e) {
    $el = $(e.target).parent("li");
    
    console.log($el.css('height'))
    if ($el.css('height') == '80px') {
      $el.animate({
        height: '120px'
      })
    } else {
      $el.animate({
        height: '80px'
      })
    }
  })
})
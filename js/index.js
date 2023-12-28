// display pop-up

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector("#ac-wrapper").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#ac-wrapper").style.display = "none";
});

// display scroll-up button

$(window).on('scroll',function() {
  if (window.scrollY > window.outerHeight) {
    $('#scrollToTop').addClass('active')
  } else {
    $('#scrollToTop').removeClass('active')
  }
})

$('#scrollToTop').on('click',function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
})
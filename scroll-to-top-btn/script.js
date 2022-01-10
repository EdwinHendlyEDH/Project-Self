const btnToTop = document.querySelector(".btn-to-top");

btnToTop.addEventListener('click', function(){

    //this mean the top: 0 and the left 0
    window.scrollTo(0, 0);
    

    //you can use this one to if you dont put 'scroll-behaviour:smooth; at the css but if already then ok no need'
    // window.scrollTo({
    //     top: 0,
    //     left:0,
    //     behavior: 'smooth'
    // })


    //jquery
    // $("html, body").animate({scrollTop: 0}, "slow");
});
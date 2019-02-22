var banner = (function(){
    var $prev = document.querySelector('.prev');
    var $next = document.querySelector('.next');
    var $mainWrap = document.querySelectorAll('.main-wrap');
    var $bn = document.querySelector('.banner');
    var $bnWrap = document.querySelector('.banner-wrap');
    var $left = $bnWrap.clientWidth;
    var count = 0;
    return {
        init(){
            this.event();
        },
        event(){
            // $prev.onclick = function(){
            //     // count++;
            //     // if(count >= 3){
            //     //     count = 0;
            //     // }
            //     // $bn.style.left = -($left*count)+ 'px';
            //     swiper.init('.banner-wrap');
            // }
            // $next.onclick = function(){
            //     // count--;
            //     // if(count <= 0){
            //     //     count = 3;
            //     // }
            //     // $bn.style.left = -($left*count)+ 'px';
            //     swiper.init('.banner-wrap');
            // }
            swiper.init('.banner-wrap');
        }
    }
}())
banner.init();
var page0 = document.getElementById("div0");
var page1 = document.getElementById("div1");
var page2 = document.getElementById("div2");
var page3 = document.getElementById("div3");

//페이지 로드시 작동하는 함수
window.onload = pageLoad;
function pageLoad(){
    
    scroll_event();
    //가장 마지막에 적용된다.
};




window.addEventListener('scroll', function () {


    scroll_event();



});

function PageShower(scrollPosition) {
    var Content_Div = document.getElementsByClassName("Content_Div");
    for (var i = 0; i < Content_Div.length; i++){
        Content_Div[i].classList.remove('show');
    }
    console.log(scrollPosition);
    switch (Math.floor(scrollPosition/400)) {
        case 0:
            page0.classList.add('show');
            break;
        case 1:
            page1.classList.add('show');
            break;
        case 2:
            page2.classList.add('show');
            break;
        case 3:
            page3.classList.add('show');
            break;
        case 4:
            page4.classList.add('show');
            break;
        default:
            break;
    }
}

function scroll_event() {
    var scrollPosition = window.scrollY;

    

    // 스크롤 위치에 따라 클래스 추가/제거
    PageShower(scrollPosition);
    



    // page1
    // if (scrollPosition>=0 && scrollPosition<500) {
    //     console.log(scrollPosition);
    //     page1.classList.add('show');
    // }
    // else {
    //     page1.classList.remove('show');
    // }

    // // page2
    // if (scrollPosition>=500 && scrollPosition<1000) {
    //     console.log(scrollPosition);
    //     page2.classList.add('show');
    // }
    // else {
    //     page2.classList.remove('show');
    // }
    // // page3
    // if (scrollPosition>=1000 && scrollPosition<1500) {
    //     console.log(scrollPosition);
    //     page3.classList.add('show');
    // }
    // else {
    //     page3.classList.remove('show');
    // }
    // // page4
    // if (scrollPosition>=1500 && scrollPosition<2000) {
    //     console.log(scrollPosition);
    //     page4.classList.add('show');
    // }
    // else {
    //     page4.classList.remove('show');
    // }
}
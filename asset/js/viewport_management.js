// Section_List 링크
const Section_List = document.getElementsByTagName('section');
// Section에 있는 data-section-name호출
var Section_Name_List = new Array(Section_List.length);
var Section_Id_List = new Array(Section_List.length);

//defaultPageLoad()

window.addEventListener('resize', defaultPageLoad);
function defaultPageLoad() {
    ControlSectionInViewport();
    initMail();
    startInterval();
    canvasDraw();
}


//canvas
{
    var canvas_width;
    function canvasDraw() {
        canvas_width = window.innerWidth * 0.27;
        var canvas = document.getElementById('canvasID');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        

        var imgsrc = new Image();
        imgsrc.src = 'asset/image/graph.png'

        imgsrc.addEventListener('load', () => {
            ctx.drawImage(imgsrc, 0, 0, canvas_width, canvas.height);
            ctx.fillStyle = '#000';
            ctx.fillText("측정 주기", canvas_width * 0.5, canvas.height * 0.2);
            ctx.fillText("측정 시간", canvas_width * 0.5, canvas.height * 0.8);
        })
        
        
        
    }

}

//vr
{
    var xAngle = 0, yAngle = 0;
    var vr = document.getElementById('VR');
    var timer = 0;
    function rotationVR() {
        // console.log('rotate');
        timer += 1;
        xAngle = Math.sin(timer)*3;
        yAngle = 180+Math.sin(timer)*5;

        vr.style.transform = 'rotate(' + xAngle + 'deg)';
        vr.style.transform = 'skew(' + yAngle + 'deg)';
    }
    function startInterval() {
        var rotateInterval = setInterval(() => rotationVR(), 100);
    }
}

//mail
{
    
function mailViewOpen() {
    var mailView = document.getElementsByClassName('mailView')[0];
    mailView.classList.add('mailShower');
    mailView.style.zIndex = 100;
}
function mailViewClose() {
    var mailView = document.getElementsByClassName('mailView')[0];
    mailView.classList.remove('mailShower');
    mailView.style.zIndex = -1;
    
}
function initMail() {
    console.log('load');
    document.getElementById('mailViewOpen').onclick = mailViewOpen;
    document.getElementById('mailIframe').contentWindow.document.getElementById('mailViewClose').onclick = mailViewClose;
}


}
// aside 
{

for (var i = 0; i < Section_List.length; i++){
    Section_Name_List[i] = Section_List[i].dataset.sectionName;
    Section_Id_List[i] = Section_List[i].id;
}

// aside의 item 링크
const Aside_Item = document.getElementById('itemlist');
for (var i = 0; i < Section_List.length; i++){
    var name_href = document.createElement('a');
    name_href.classList.add('item');
    name_href.setAttribute('href', '#' + Section_Id_List[i]);
    name_href.innerText = Section_Name_List[i];
    Aside_Item.appendChild(name_href);
}

const links = document.getElementsByClassName('item');

// 각 링크에 클릭 이벤트 리스너 추가
for (var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event) {
        // 기본 동작(링크 이동) 방지
        event.preventDefault();

        // 링크의 href 속성값 가져오기
        const targetId = this.getAttribute('href');

        // offset 값 설정 (원하는 값으로 조정)
        const offset = 110; // ex: 100px

        // 해당 위치로 스크롤 이동
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop - offset,
            behavior: 'smooth'
        });
    });
}
}

// footer
{
    //since 관리
    var since_year = document.getElementById('since_year');
    var date = new Date();
    var date_year = date.getFullYear();
    since_year.innerText += date_year.toString();
}

// scroll event
{
    var scrolling;
    function CorViewport() {
        if (!scrolling) {
        }
        clearTimeout(scrolling);
        scrolling=setTimeout(() => {
            scrolling = undefined;
            var SelectSection = document.getElementsByTagName('section');
            for (var i = 0; i < SelectSection.length; i++){
                if (SelectSection[i].classList.contains('section_shower')) {
                    var id = SelectSection[i].id;

                    // offset 값 설정 (원하는 값으로 조정)
                    const offset = 110; // ex: 100px

                    // 해당 위치로 스크롤 이동
                    window.scrollTo({
                        top: document.querySelector('#'+id).offsetTop - offset,
                        behavior: 'smooth'
                        
        });
                }
            }
        }, 100);
    }
    function ControlSectionInViewport() {
        var Sections = document.getElementsByTagName('section');
        

        for (var i = 0; i < Sections.length; i++){
            var section = Sections[i].getBoundingClientRect();
            var ViewportHeight = (window.innerHeight || document.documentElement.clientHeight);
            if (
                section.bottom >= 0 &&
                section.top <= ViewportHeight
            ) {
                Sections[i].classList.add('section_shower');
            }
            else {
                Sections[i].classList.remove('section_shower');
            }
        }
    }

    window.addEventListener('scroll', function () {
        ControlSectionInViewport();
        
        // CorViewport();
    });
}
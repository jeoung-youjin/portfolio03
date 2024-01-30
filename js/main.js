var swiper = new Swiper(".visual", {
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  loop:true
});
var swiper = new Swiper(".recommend", {
  slidesPerView: 2,
  loop:true,
  centeredSlides: false,
  spaceBetween: 40,
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
var appendNumber = 4;
var prependNumber = 1;

var swiper = new Swiper(".subscription", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});


// header search 
let searchBt = document.querySelector(".search button")
let searchWrap = document.querySelector(".search-wrap")
let searchBg=document.querySelector(".search-wrap-bg")
let searchClose=document.querySelector(".close")

searchBt.addEventListener("click",()=>{
  searchWrap.classList.add("on")
  searchBg.classList.add("on")
})

searchClose.addEventListener("click",()=>{
  searchWrap.classList.remove("on")
  searchBg.classList.remove("on")
})

// 추천 검색어
let serRecommend=["요금제","친구추천","휴대폰","중고폰","제휴카드"]
let serList=document.querySelector(".search-recommend-list")
let serGroup=``

for(let i=0; i < serRecommend.length; i++){
  serGroup +=`
  <li><a><span>${i+1}.</span> ${serRecommend[i]}</a></li>
  `
}
serList.innerHTML=serGroup

// 인기검색어
let serPop = ["유심" , "유심요금제", "요금제", "중고폰", "가입하기"]
let popList= document.querySelector(".search-popular-list")
let popGroup=``

for(let i=0; i < serPop.length; i++){
  popGroup +=`
  <li>
    <a><span>${i+1}.</span> ${serPop[i]}</a>
  </li>`
}
popList.innerHTML=popGroup

// 마이 페이지 버튼
let myPage=document.querySelector(".my-page button")
let pageBt=document.querySelector(".my-page-login")

myPage.addEventListener("click",()=>{
  pageBt.classList.toggle("on")
})

// top all 버튼
let topBt=document.querySelector(".tnb .top-manu")
let topBg=document.querySelector(".tnb .top-manu-bg")
let topWrap=document.querySelector(".top-manu-wrap")

topBt.addEventListener("click",()=>{
  topBg.classList.add("on")
  topWrap.classList.add("on")
})


// event list
function Event(point,price,des,text){
  this.point=point;
  this.price=price;
  this.des=des;
  this.text=text;
}
let evList01=new Event("데이터 통화 무제한?","월 33,000원!","월11GB+일2GB","통화 무제한 문자 기본제공")
let evList02=new Event("1만원대 평생 무제한?","월 16,400원","월 7GB, 1Mbps","통화 무제한 문자 기본제공")
let evList03=new Event("eSIM 초저가 요금제","월 2,200원!","데이터 월 500MB","통화 60분, 문자 50건")
let evList04=new Event("휴대폰 바꾸실 땐?","신규 LTE촌 A24","어떤 휴대폰 가입해도","3만원 혜택 100% 증정<")
let evList05=new Event("어머, 유모바일에","로밍서비스도 있네요?","최대 4GB + 테더링","음성통화 무제한")
let evList06=new Event("친구에게 유모바일","추천해주세요","추천한 친구가 가입하면","1만포인트 + 추가 포인트")
let evLists=[evList01,evList02,evList03,evList04,evList05,evList06];
let thriftyList = document.querySelector(".thrifty-event-list")
let evGroup=``

for(const evList of evLists){ 
  evGroup +=`
  <li>
    <a class="list-txt" href="#">
        <strong class="list-txt-point">${evList.point}<br>${evList.price}</strong>
        <em class="list-txt-des">${evList.des}<br>${evList.text}</em>
    </a>
  </li> 
  `
}
thriftyList.innerHTML=evGroup;

// recommend 탭 이벤트
let recommendBts = document.querySelectorAll(".recommend-bt > p")
let recommendBoxs=document.querySelectorAll(".recommend-charge-wrap > li")

recommendBts.forEach((recommendBt,index)=>{
  recommendBt.addEventListener("click",function(){
    for(const recommendBt of recommendBts){recommendBt.classList.remove("on");}
    for(const recommendBox of recommendBoxs){recommendBox.classList.remove("on");}
    recommendBoxs[index].classList.add("on")
    this.classList.add("on")
  })
});
recommendBts[0].click();

//join 탭이벤트
let joinBts=document.querySelectorAll(".join-bt > p")
let joinBoxs=document.querySelectorAll(".join-box > li")

joinBts.forEach((joinBt,index)=>{
  joinBt.addEventListener("click",function(){
    for(const joinBt of joinBts){joinBt.classList.remove("on");}
    for(const joinBox of joinBoxs){joinBox.classList.remove("on");}
    joinBoxs[index].classList.add("on")
    this.classList.add("on")
  })
})
joinBts[0].click("on")
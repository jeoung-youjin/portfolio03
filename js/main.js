var swiper = new Swiper(".visual", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});
var swiper = new Swiper(".recommend", {
  slidesPerView: 2,
  loop: true,
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
  loop: true,
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
let searchBt = document.querySelector(".search button");
let searchWrap = document.querySelector(".search-wrap");
let searchBg = document.querySelector(".search-wrap-bg");
let searchClose = document.querySelector(".close");

searchBt.addEventListener("click", () => {
  searchWrap.classList.add("on");
  searchBg.classList.add("on");
});

searchClose.addEventListener("click", () => {
  searchWrap.classList.remove("on");
  searchBg.classList.remove("on");
});

// 추천 검색어
let serRecommend = ["요금제", "친구추천", "휴대폰", "중고폰", "제휴카드"];
let serList = document.querySelector(".search-recommend-list");
let serGroup = ``;

for (let i = 0; i < serRecommend.length; i++) {
  serGroup += `
  <li><a><span>${i + 1}.</span> ${serRecommend[i]}</a></li>
  `;
}
serList.innerHTML = serGroup;

// 인기검색어
let serPop = ["유심", "유심요금제", "요금제", "중고폰", "가입하기"];
let popList = document.querySelector(".search-popular-list");
let popGroup = ``;

for (let i = 0; i < serPop.length; i++) {
  popGroup += `
  <li><a><span>${i + 1}.</span> ${serPop[i]}</a></li>`;
}
popList.innerHTML = popGroup;

// 마이 페이지 버튼
let myPage = document.querySelector(".my-page button");
let pageBt = document.querySelector(".my-page-login");

myPage.addEventListener("click", () => {
  pageBt.classList.toggle("on");
});

// top all 버튼
let topBt = document.querySelector(".tnb .top-manu");
let topBg = document.querySelector(".tnb .top-manu-bg");
let topWrap = document.querySelector(".top-manu-wrap");

topBt.addEventListener("click", () => {
  topBg.classList.add("on");
  topWrap.classList.add("on");
});


// event list
let thriftyList = document.querySelector(".thrifty-event-list");
let evGroup = ``;
fetch("../portfolio03/js/main.json")
.then((response)=>response.json())
.then((json)=>{
  data=json.이벤트
  data.forEach(element=>{
    evGroup+=`
    <li>
      <a class="list-txt" href="#">
          <strong class="list-txt-point">${element.핵심}</strong>
          <em class="list-txt-des">${element.설명}</em>
      </a>
    </li> 
    `;
  })
  thriftyList.innerHTML = evGroup;
})


// recommend 탭 이벤트
let recommendBts = document.querySelectorAll(".recommend-bt > p");
let recommendBoxs = document.querySelectorAll(".recommend-charge-wrap > li");

recommendBts.forEach((recommendBt, index) => {
  recommendBt.addEventListener("click", function() {
    for (const recommendBt of recommendBts) {recommendBt.classList.remove("on"); }
    for (const recommendBox of recommendBoxs) {recommendBox.classList.remove("on"); }
    recommendBoxs[index].classList.add("on");
    this.classList.add("on");
  });
});
recommendBts[0].click();

//join 탭이벤트
let joinBts = document.querySelectorAll(".join-bt > p");
let joinBoxs = document.querySelectorAll(".join-box > li");

joinBts.forEach((joinBt, index) => {
  joinBt.addEventListener("click", function () {
    for (const joinBt of joinBts) {joinBt.classList.remove("on"); }
    for (const joinBox of joinBoxs) {joinBox.classList.remove("on"); }
    joinBoxs[index].classList.add("on");
    this.classList.add("on");
  });
});
joinBts[0].click("on");


//리뷰 js 삽입
let reviewArticle = document.querySelector(".review-article");

fetch("../portfolio03/js/main.json")
.then((response)=>response.json())
.then((json)=>{
  data=json.리뷰
  let arGroup = ``;
  data.forEach(element => {
    arGroup+=`
    <li>
    <a href="#">
        <div class="mov"><iframe src="${element.영상}"></iframe></div>
        <div class="review-des">
            <span class="satisfaction">만족도<em>${element.만족도}</em></span>
            <p class="txt">${element.내용}</p>
            <em class="date">${element.날짜}</em>
            <div class="Customer-information"><p>${element.기종}</p></div>
        </div>
    </a>
  </li>
  `
  })
  reviewArticle.innerHTML=arGroup
})


//요금제 
let chargeBest = document.querySelector(".recommend-charge-best > .recommend-box .swiper-wrapper");
let chargeEsime = document.querySelector(".recommend-charge-esime  > .recommend-box .swiper-wrapper");
let chargeTwenty = document.querySelector(".recommend-charge-20 > .recommend-box .swiper-wrapper");
let chargeGroup = document.querySelector(".recommend-charge-5G  > .recommend-box .swiper-wrapper");

fetch("../portfolio03/js/charge.json")
.then((response)=>response.json())
.then((json)=>{
  data=json.LTE
  let beGroup = ``;
  data.forEach(element =>{
    beGroup +=  makeChargeTemp(element)
  });
  chargeBest.innerHTML = beGroup;

  data=json.eSIM;
  let esGroup = ``;
  data.forEach(element =>{
    esGroup+= makeChargeTemp(element)
  });
  chargeEsime.innerHTML=esGroup;

  data=json.월만원;
  let twGroup = ``;
  data.forEach(element=>{
    twGroup+=makeChargeTemp(element)
  });
  chargeTwenty.innerHTML=twGroup;

  data=json.이십세
  let chGroup = ``;
  data.forEach(element => {
    chGroup+=makeChargeTemp(element)
  })
  chargeGroup.innerHTML = chGroup;
})

// makeChargeTemp 
function makeChargeTemp(listname) {
  return `
  <div class="swiper-slide">
  <a href="#">
      <div class="slide-txt-area">
          <p class="slide-tit">${listname.요금제}</p>
          <div class="des">
              <strong class="des-point">${listname.혜택}</strong>
              <span><strong>통화</strong>${listname.전화}</span>
              <span><strong>문자</strong>${listname.문자}</span>
          </div>
          <p class="text-box">${listname.설명}</p>
          <strong class="price">${listname.금액}</strong>
      </div>
  </a>
</div>`;
}
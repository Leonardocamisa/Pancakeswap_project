const earnSwitchTitle = () => {
    let title = document.getElementById("titleEarnSwitch");
    let titleContent = title.innerText;
    let firstEarnContent = document.querySelector('.earnFirstContent')
    let secondEarnContent = document.querySelector('.earnSecondContent')
    if (titleContent == "Farms") {
        firstEarnContent.classList.add('hideEarn');
        secondEarnContent.classList.remove('hideEarn');
        title.innerHTML = "Syrup Pools";
    } else {
        firstEarnContent.classList.remove('hideEarn');
        secondEarnContent.classList.add('hideEarn');
        title.innerHTML = "Farms";
    }
}
setInterval(earnSwitchTitle, 5000);

document.getElementById('btnEarn').addEventListener('click', () => {earnSwitchTitle()});

let lotteryValueAmount = 130043;


function displayCardValues(value){
    const lotteryValue = document.getElementById("lotteryValue");
    value = String(value);
    value = value.slice(0,3) + "," + value.slice(3);

    lotteryValue.textContent = value;
}


async function changeCardValues(){
    let amountToChange = Math.round((Math.random() + 1) * 10);

    for(let i = 0; i < amountToChange; i++){
        let numberChanger = await promiseChangeCardValue();
        displayCardValues(numberChanger);
    }
}

function promiseChangeCardValue(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            lotteryValueAmount += 1;
            resolve(lotteryValueAmount);
        },100);
    })
}

setInterval(changeCardValues,30000);
window.addEventListener("DOMContentLoaded", displayCardValues(lotteryValueAmount));

function countdown(){
    let now = new Date();
    let eventDate = new Date(2023, 11, 25);

    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTiime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}

countdown();


let slideIndex = 0;
showSlides();

let timer = setTimeout(showSlides, 5000);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner-container");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex - 1].classList.remove("hide");
//   dots[slideIndex - 1].className += " active";
}


document.getElementById('btnBannerR').addEventListener('click', ()=>{
    const banner02 = document.getElementById('banner02');
    const banner01 = document.getElementById('banner01');

    if(banner02.classList.contains('hide')){
      banner02.classList.remove('hide');
      banner01.classList.add('hide');
      clearTimeout(timer);
      setInterval(()=>{
        timer = setTimeout(showSlides, 5000);
      }, 5000)
    }
})

document.getElementById('btnBannerL').addEventListener('click', ()=>{
  const banner02 = document.getElementById('banner02');
  const banner01 = document.getElementById('banner01');

  if(banner01.classList.contains('hide')){
    banner01.classList.remove('hide');
    banner02.classList.add('hide');
    clearTimeout(timer);
    setInterval(()=>{
      timer = setTimeout(showSlides, 5000);
    }, 5000)
  }
});

document.getElementById('warningSiteCloser').addEventListener('click', ()=>{
    const bannerWarning = document.getElementById("bannerWarningPhishing");
    const main = document.getElementById("mainContainer");

    bannerWarning.style.display = "none";
    main.style.marginTop = "56px";

});

/* v============ INIZIO DARKMODE ============v */

document.querySelectorAll('.checkboxDarkMode').forEach(element => {
  element.addEventListener('change', ()=>{

  document.body.classList.toggle('darkmode');

  if(document.body.classList.contains('darkmode')){
      document.getElementById('bannerBunny').src = "img/bunnyDark.png";
      document.getElementById('bannerStar1').src = "img/star-dark-l.png";
      document.getElementById('bannerStar2').src = "img/star-dark-r.png";
      document.getElementById('bannerStar3').src = "img/star-top-dark-r.png";

      document.getElementById('ball-4').src = "img/section-prizes/4-dark.png";
      document.getElementById('ball-7').src = "img/section-prizes/7-dark.png";

      document.getElementById('bottom-left-card').src = "img/section-prizes/bottom-left-dark.png";
      document.getElementById('green-card').src = "img/section-prizes/green-dark.png";
      document.getElementById('red-card').src = "img/section-prizes/red-dark.png";
      document.getElementById('top-right-card').src = "img/section-prizes/top-right-dark.png";

      document.getElementById('tradeBtc').src = "img/BTC-dark.png";
      document.getElementById('tradeCake').src = "img/CAKE2.png";

      document.getElementById('buyCakeCoin').src = "img/coin_pancake-dark.png";

      document.querySelectorAll('.toggle-switch').forEach(element =>{
        element.classList.replace('light', 'dark');
      });

      document.querySelectorAll('.checkboxDarkMode').forEach(element =>{
        element.checked = true;
      })

  }else{
      document.getElementById('bannerBunny').src = "img/bunny.png";
      document.getElementById('bannerStar1').src = "img/star-l.png";
      document.getElementById('bannerStar2').src = "img/star-r.png";
      document.getElementById('bannerStar3').src = "img/star-top-r.png";

      document.getElementById('ball-4').src = "img/section-prizes/4.png";
      document.getElementById('ball-7').src = "img/section-prizes/7.png";

      document.getElementById('bottom-left-card').src = "img/section-prizes/bottom-left.png";
      document.getElementById('green-card').src = "img/section-prizes/green.png";
      document.getElementById('red-card').src = "img/section-prizes/red.png";
      document.getElementById('top-right-card').src = "img/section-prizes/top-right.png";

      document.getElementById('tradeBtc').src = "img/BTC.png";
      document.getElementById('tradeCake').src = "img/CAKE.png";

      document.getElementById('buyCakeCoin').src = "/img/coin_pancake.png";

      document.querySelectorAll('.toggle-switch').forEach(element =>{
        element.classList.replace('dark', 'light');
      });

      document.querySelectorAll('.checkboxDarkMode').forEach(element =>{
        element.checked = false;
      })
  }
}) });

/* ^============ FINE DARKMODE ============^ */

/* v============ INIZIO SCROLL NAV ============v */

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarContainer").style.top = "0";
  } else {
    document.getElementById("navbarContainer").style.top = "-126px";
  }
  prevScrollpos = currentScrollPos;
}

/* ^============ FINE SCROLL NAV ============^ */



let btnArray = document.querySelectorAll('.btnActive');

btnArray.forEach(element => {

  element.addEventListener('mouseover', ()=>{
    document.getElementById('navMobileBack').style.display = 'block';
  });

  element.addEventListener('mouseleave', ()=>{
    document.getElementById('navMobileBack').style.display = 'none';
  })

  document.getElementById('sectionCake').classList.toggle('darkmode');
});






const settingsButton = document.getElementById('open-settings-dialog-button');
const hiddenSettings = document.getElementById('hiddenSettings');
const closeSettings = document.getElementById('closeSettings');

closeSettings.addEventListener('click', () => {
  hiddenSettings.style.display = 'none';
  document.body.style.overflowY = 'auto';
})

settingsButton.addEventListener('click', () => {
  hiddenSettings.style.display = "block";
  document.body.style.overflowY = "hidden";
});

 document.body.addEventListener('click', (element) =>{
  if(element.target.id === 'containerPositioner'){
    hiddenSettings.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }

  /* if(element.target == settingsButton){
  hiddenSettings.style.display = 'block';
  document.body.style.overflowY = "hidden";
  } */
});




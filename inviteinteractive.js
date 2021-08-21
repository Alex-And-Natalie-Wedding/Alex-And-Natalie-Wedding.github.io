document.addEventListener('DOMContentLoaded', function () {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2021, 08, 17);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });


  
  let circleone=document.querySelector(".circleone");
  let circletwo=document.querySelector(".circletwo");
  let circlethree=document.querySelector(".circlethree");
  let circlefour=document.querySelector(".circlefour");
  let circlefive=document.querySelector(".circlefive");
  let circlesix=document.querySelector(".circlesix");
  let circleseven=document.querySelector(".circleseven");
  let circleeight=document.querySelector(".circleeight");
  let sign=document.querySelector(".pallete h1");
  

  circleone.addEventListener("click",function()
{
  circleone.classList.toggle("chosen");  
  if(circleone.classList.contains ("chosen")){
    sign.textContent=("В нем и приходи")}
    else{sign.textContent=("Выбери цвет")}
  }
  
  )
 
  
  circletwo.addEventListener("click",function()
  {
    circletwo.classList.toggle("chosen");  
    if(circletwo.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )

    circlethree.addEventListener("click",function()
  {
    circlethree.classList.toggle("chosen");  
    if(circlethree.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )
   
    circlefour.addEventListener("click",function()
  {
    circlefour.classList.toggle("chosen");  
    if(circlefour.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )

    circlefive.addEventListener("click",function()
  {
    circlefive.classList.toggle("chosen");  
    if(circlefive.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )

    circlesix.addEventListener("click",function()
  {
    circlesix.classList.toggle("chosen");  
    if(circlesix.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )

    circleseven.addEventListener("click",function()
  {
    circleseven.classList.toggle("chosen");  
    if(circleseven.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )

    circleeight.addEventListener("click",function()
  {
    circleeight.classList.toggle("chosen");  
    if(circleeight.classList.contains ("chosen")){
      sign.textContent=("В нем и приходи")}
      else{sign.textContent=("Выбери цвет")}
    }
    
    )

   
  

   const animItems=document.querySelectorAll(".nonactive")

   if (animItems.length>0){
     window.addEventListener("scroll", animOnscroll);
     function animOnscroll(){
       for (let index=0; index<animItems.length;index++ )
       {const animItem=animItems[index];
        const animItemHeight=animItem.offsetHeight;
        const animItemOffset=offset(animItem).top;
        const animStart=2;

        let animItemPoint=window.innerHeight-animItemHeight/animStart;
        if(animItemHeight>window.innerHeight){
          animItemPoint=window.innerHeight-window.innerHeight/animStart }
          if((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
            animItem.classList.add("active")
          }else{animItem.classList.remove("active")}
       }
     }
     function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft 
      }
  }
   }
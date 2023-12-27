const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const img = document.querySelector('.img-container');

let cnt = 0;
let max = 500;

leftBtn.addEventListener("click" ,()=>{
    if(cnt>0){
      cnt--;
      img.style.transform =`translateX(-${cnt*max}px)`;
    console.log(img.style.transform)

    }else if(cnt===0){
      cnt=7;
      img.style.transform =`translateX(-${cnt*max}px)`;
    }
  })
  
  
  rightBtn.addEventListener("click" ,()=>{
    if(cnt<7){
      cnt++;
      img.style.transform =`translateX(-${cnt*max}px)`;
    }else if(cnt===7){
      cnt=0;
      img.style.transform =`translateX(-${cnt*max}px)`;
    }
  })
window.addEventListener("scroll",reveal);
function reveal (){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; 1 < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}



const titles = document.querySelectorAll('.title');

window.addEventListener('scroll', checktitle);

checktitle();

function checktitle(){
    const titleBottom = window.innerHeight / 5 * 5;

    titles.forEach(title =>{
        const titleTop = title.getBoundingClientRect().top;

        if(titleTop < titleBottom){
            title.classList.add('show')
        }
        else(
            title.classList.remove('show')
        )
    })
}



const lefts = document.querySelectorAll('.left');

window.addEventListener('scroll', leftAnim);

leftAnim();

function leftAnim(){
    const leftAnimBottom = window.innerHeight / 5 * 4;

    lefts.forEach(left =>{
        const leftTop = left.getBoundingClientRect().top;

        if(leftTop < leftAnimBottom){
            left.classList.add('show');
        }
        else{
           
        }
         
    })
}

const opacity = document.querySelectorAll('.active');

window.addEventListener('scroll', opacityAnim);

opacityAnim();

function opacityAnim(){
    const opacityAnimBottom = window.innerHeight / 5 * 4;

    opacity.forEach(active =>{
        const opacityTop = active.getBoundingClientRect().top;

        if(opacityTop < opacityAnimBottom){
            active.classList.add('show');
        }
    })
}













const leftTwos = document.querySelectorAll('.leftTwo');

window.addEventListener('scroll', leftTwoAnim)

leftTwoAnim();

function leftTwoAnim(){
    const leftTwoAnimBottom = window.innerHeight / 5 * 4;

   leftTwos.forEach(leftTwo =>{
    const leftTwoTop = leftTwo.getBoundingClientRect().top;

     if(leftTwoTop < leftTwoAnimBottom){
        leftTwo.classList.add('show');
     }
    //  else{
    //     leftTwo.classList.remove('show');
    //  }
  }
)};











const rights = document.querySelectorAll('.right');

window.addEventListener('scroll', rightAnim);

rightAnim();

function rightAnim(){
    const rightAnimBottom = window.innerHeight / 5 * 4;

    rights.forEach(right =>{
        const rightTop = right.getBoundingClientRect().top;

        if(rightTop < rightAnimBottom){
            right.classList.add('show');
        }
        // else{
        //     right.classList.remove('show');
        //  }
        
    })
}















document.addEventListener("DOMContentLoaded", function(event) { 

    /************** header on scroll  */
    let header = document.querySelector('.header');
    let headerHeight = header.clientHeight;
 
    window.onscroll = function(){
       if(window.pageYOffset > headerHeight){
          header.classList.add('fixed');
       }else{
          header.classList.remove('fixed');
       }
    }
})


let modul = document.getElementById('modulFunct');

function openModul(){
    modul.classList.add('open-modul');
}

function closeModul(){
    modul.classList.remove('open-modul');
}